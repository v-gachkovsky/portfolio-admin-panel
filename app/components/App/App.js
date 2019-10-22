import React, { Suspense } from 'react';

import AdminLayout from 'layouts/AdminLayout';

import { routerConfig } from './routes';
import Router from '../Router';

function App() {
  return (
    <AdminLayout>
      <Suspense fallback={null}>
        <Router routeConfig={routerConfig} />
      </Suspense>
    </AdminLayout>
  );
}

export default App;
