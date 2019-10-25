import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import AdminLayout from 'layouts/AdminLayout';

import { routerConfig } from './routes';
import Router from '../Router';

function App({ location }) {
  return (
    <AdminLayout location={location}>
      <Suspense fallback={null}>
        <Router routeConfig={routerConfig} />
      </Suspense>
    </AdminLayout>
  );
}

App.propTypes = {
  location: PropTypes.object.isRequired,
};

export default App;
