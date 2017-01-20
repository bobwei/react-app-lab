import R from 'ramda';
import { handleActions } from 'redux-actions';

import { put } from '../actions';

export const initialState = {
  list: [],
  detail: {},
};

export default handleActions({
  [put]: (state, action) => ({
    ...state,
    list: R.map(R.prop('id'))(action.payload),
    detail: R.indexBy(R.prop('id'))(action.payload),
  }),
}, { ...initialState });
