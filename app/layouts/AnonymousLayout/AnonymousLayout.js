import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import routes from 'app/appConstants/routes';

import { Link } from './styled';

function AnonymousLayout({ children }) {
  return (
    <Fragment>
      <div>
        <Link to={routes.login}>
          Login
        </Link>
        <Link to={routes.dashboard}>
          Dashboard
        </Link>
      </div>
      {children}
    </Fragment>
  );
}

AnonymousLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AnonymousLayout;
