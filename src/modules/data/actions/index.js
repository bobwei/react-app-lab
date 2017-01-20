import { createAction } from 'redux-actions';
import R from 'ramda';

import DataAPI from '../api';

export const modulePrefix = 'modules/data';

export const put = createAction(`${modulePrefix}:put`);
export const reset = createAction(`${modulePrefix}:reset`);

export const fetchData = params => dispatch => (
  DataAPI
    .request()
    .get('/api/cms/v3/products', { params })
    .then(R.compose(
      dispatch,
      put,
      R.path(['data', 'contents']),
    ))
);
