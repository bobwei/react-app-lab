import R from 'ramda';
import { get } from 'lodash/fp';

const mapStateToProps = state => ({
  data: R.compose(
    R.map(row => ({
      ...R.pick(['id', 'title'])(row),
      photo: get('apps[0].thumbnails.medium.url')(row),
    })),
    ({ list, detail }) => R.map(R.prop(R.__, detail))(list),
    R.pick(['list', 'detail']),
    R.path(['data']),
  )(state),
});

export default mapStateToProps;
