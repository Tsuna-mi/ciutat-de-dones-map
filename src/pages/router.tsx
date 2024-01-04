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
      },
      {
        path: '/results',
      },
      {
        path: '/detail/:id',
      },
    ],
  },
]);
