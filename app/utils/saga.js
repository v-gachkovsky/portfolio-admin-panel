import createSagaInjector from 'redux-sagas-dynamic-injector';
import { store } from 'init';

export const injectSaga = createSagaInjector(store);
