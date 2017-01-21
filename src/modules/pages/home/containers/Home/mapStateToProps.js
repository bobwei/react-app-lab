import R from 'ramda';

const mapStateToProps = state => ({
  data: R.compose(
    R.map(R.pick(['id', 'title'])),
    ({ list, detail }) => R.map(R.prop(R.__, detail))(list),
    R.pick(['list', 'detail']),
    R.path(['data']),
  )(state),
});

export default mapStateToProps;
