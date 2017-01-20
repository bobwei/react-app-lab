/* eslint-disable no-underscore-dangle */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import R from 'ramda';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';

import * as dataActions from 'modules/data/actions';

export const withData = () => compose(
  connect(R.compose(
    R.objOf('data'),
    ({ list, detail }) => R.map(R.prop(R.__, detail))(list),
    R.pick(['list', 'detail']),
    R.path(['data']),
  ), dispatch => bindActionCreators(dataActions, dispatch)),
  lifecycle({
    componentDidMount() {
      const { fetchData } = this.props;
      fetchData();
    },
  }),
);
