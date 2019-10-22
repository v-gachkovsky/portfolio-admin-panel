import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

import routes from 'constants/routes';

function Router({ routeConfig }) {
  const { anonymous, authorized } = routeConfig;

  const renderRoutes = r => r.map(route => (
    <Route
      key={route.key}
      exact={route.exact}
      path={route.path}
      component={route.component}
    />
  ));

  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to={routes.login}
      />
      {renderRoutes(anonymous)}
      {renderRoutes(authorized)}
      <Route
        path="/*"
        render={() => (
          <div>
            404
          </div>
        )}
      />
    </Switch>
  );
}

const routeType = PropTypes.shape({
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  path: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  key: PropTypes.string,
  exact: PropTypes.bool,
});

Router.propTypes = {
  routeConfig: PropTypes.shape({
    anonymous: PropTypes.arrayOf(routeType),
    authorized: PropTypes.arrayOf(routeType),
  }).isRequired,
};

export default Router;
