import { lazy } from 'react';
import { routes } from 'appConstants';

const LoginPage = lazy(() => import('../../pages/LoginPage'));
const LogoutPage = lazy(() => import('../../pages/LogoutPage'));
const ProductDesignPage = lazy(() => import('../../pages/ProductDesignPage'));
const PublicationsPage = lazy(() => import('../../pages/PublicationsPage'));
const ContactMePage = lazy(() => import('../../pages/ContactMePage'));
const NewsPage = lazy(() => import('../../pages/NewsPage'));

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
      key: routes.logout,
      path: routes.logout,
      component: LogoutPage,
      exact: true,
    },
    {
      key: routes.productDesign,
      path: routes.productDesign,
      component: ProductDesignPage,
      exact: true,
    },
    {
      key: routes.publications,
      path: routes.publications,
      component: PublicationsPage,
      exact: true,
    },
    {
      key: routes.contactMe,
      path: routes.contactMe,
      component: ContactMePage,
      exact: true,
    },
    {
      key: routes.news,
      path: routes.news,
      component: NewsPage,
      exact: true,
    },
  ],
};
