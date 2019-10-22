import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import configureStore from 'init/configureStore';
import history from 'init/history';

import reducerFactory from './reducers';

import App from './components/App';
import { theme } from './styles';

const store = configureStore({
  history,
  reducerFactory,
  sagaOptions: {},
});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));
