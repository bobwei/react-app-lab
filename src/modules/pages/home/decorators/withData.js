import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import R from 'ramda';
import { get } from 'lodash/fp';
import { getFormValues } from 'redux-form';
import compose from 'recompose/compose';

import * as dataActions from 'modules/data/actions';

export const mapStateToProps = state => ({
  data: R.compose(
    R.filter(R.anyPass([
      R.compose(R.isNil, R.always(getFormValues('dataQuery')(state))),
      R.compose(
        R.test(new RegExp(R.prop('q')((getFormValues('dataQuery')(state) || {})), 'i')),
        R.prop('title'),
      ),
    ])),
    R.map(row => ({
      ...R.pick(['id', 'title'])(row),
      photo: get('apps[0].thumbnails.small.url')(row),
      link: R.compose(
        R.join(''),
        R.prepend('http://www.viveport.com/apps/'),
        R.of,
        get('apps[0].id'),
      )(row),
    })),
    ({ list, detail }) => R.map(R.prop(R.__, detail))(list),
    R.pick(['list', 'detail']),
    R.path(['data']),
  )(state),
});

export default () => compose(
  connect(mapStateToProps, R.curry(bindActionCreators)(dataActions)),
);
