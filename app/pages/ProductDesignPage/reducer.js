import Immutable from 'seamless-immutable';
import createReducer from 'utils/createReducer';

import { getProducts } from './routines';

const initialState = Immutable({
  data: {},
  loading: false,
});

const reducerMap = {
  [getProducts]: {
    SUCCESS: (state, payload) => state
      .set('data', payload),
  },
};

export default createReducer(reducerMap, initialState);
