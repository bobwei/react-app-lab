import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';

export const withData = () => compose(
  lifecycle({
    componentDidMount() {
      const { fetchData } = this.props;
      fetchData({ size: 25 });
    },
  }),
);
