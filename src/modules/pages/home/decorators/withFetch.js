import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';

export default () => compose(
  lifecycle({
    componentDidMount() {
      const { fetchDataAll } = this.props;
      fetchDataAll({ size: 20 });
    },
  }),
);
