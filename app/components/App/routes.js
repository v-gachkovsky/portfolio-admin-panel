import { lazy } from 'react';
import routes from 'constants/routes';

const LoginPage = lazy(() => import('../../pages/LoginPage'));
const DashboardPage = lazy(() => import('../../pages/DashboardPage'));

export const routerConfig = {
  anonymous: [
    {
      key: routes.login,
      path: routes.login,
      component: LoginPage,
      exact: true,
    },
  ],
  authorized: [
    {
      key: routes.dashboard,
      path: routes.dashboard,
      component: DashboardPage,
      exact: true,
    },
  ],
};
