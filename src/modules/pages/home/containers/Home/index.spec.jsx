/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import configureStore from 'stores';
import Home from './index';

it('can render correctly', () => {
  const store = configureStore({});
  const component = renderer.create(
    <Provider store={store}>
      <Home />
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
