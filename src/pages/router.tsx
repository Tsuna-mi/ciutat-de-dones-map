import { createBrowserRouter, ScrollRestoration } from 'react-router-dom';
import { Layout } from 'shared/Layout/Layout';

export const router = createBrowserRouter([
  {
    element: (
      <>
        <ScrollRestoration getKey={(location) => location.pathname} />
        <Layout />
      </>
    ),
    children: [
      {
        path: '/',
        lazy: () => import('./Home'),
      },
      {
        path: '/results',
        lazy: () => import('./Results'),
      },
      {
        path: '/detail',
        lazy: () => import('./Detail'),
      },
    ],
  },
]);
