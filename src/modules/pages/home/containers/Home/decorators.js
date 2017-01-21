import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';

export const withData = () => compose(
  lifecycle({
    componentDidMount() {
      const { fetchDataAll } = this.props;
      fetchDataAll({ size: 12 });
    },
  }),
);
