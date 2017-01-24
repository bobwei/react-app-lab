import { createAction } from 'redux-actions';
import R from 'ramda';
import async from 'async';

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

export const fetchDataAll = params => dispatch => (
  new Promise((resolve) => {
    const results = [];
    async.until(
      R.compose(R.isEmpty, R.last, R.always(results)),
      (callback) => {
        DataAPI
          .request()
          .get('/api/cms/v3/products', {
            params: {
              ...params,
              from: R.compose(R.length, R.flatten)(results),
            },
          })
          .then((res) => {
            results.push(R.path(['data', 'contents'])(res));
            R.compose(dispatch, put, R.flatten)(results);
          })
          .then(() => {
            callback(null);
          });
      },
      () => {
        R.compose(resolve, dispatch, put, R.flatten)(results);
      },
    );
  })
);
