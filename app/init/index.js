import configureStore from './configureStore';
import history from './history';

import reducerFactory from '../reducers';

const store = configureStore(
  history,
  reducerFactory,
  {},
  {}
);

export { history, store };
