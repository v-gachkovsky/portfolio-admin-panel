import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

function configureStore({
  history,
  reducerFactory,
  sagaOptions = {},
  initialState = {},
}) {
  const sagaMiddleware = createSagaMiddleware(sagaOptions);

  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history),
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  const composeEnhancers = composeWithDevTools({
    shouldHotReload: false,
  });

  const store = createStore(
    reducerFactory(),
    initialState,
    composeEnhancers(...enhancers)
  );

  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {}; // Reducer registry
  store.injectedSagas = {}; // Saga registry
  store.createReducer = reducerFactory;

  return store;
}

export default configureStore;
