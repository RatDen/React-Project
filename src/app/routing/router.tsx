import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/pages';
import { Routes } from '../../shared/config';

export const router = createBrowserRouter([
  {
    path: Routes.ROOT,
    element: <Layout />,
    children: [],
  },
]);
