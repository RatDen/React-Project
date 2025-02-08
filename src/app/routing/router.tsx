import { createBrowserRouter } from 'react-router-dom';

import {
  Layout,
  HomePage,
  Favorites,
  Movies,
  Movie,
  SignIn,
  SignUp,
  History,
  NotFound,
} from '@/pages';
import { Routes } from '../../shared/config';

export const router = createBrowserRouter([
  {
    path: Routes.ROOT,
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: Routes.MOVIES, element: <Movies /> },
      { path: Routes.MOVIE, element: <Movie /> },
      { path: Routes.SIGNIN, element: <SignIn /> },
      { path: Routes.SIGNUP, element: <SignUp /> },
      { path: Routes.HISTORY, element: <History /> },
      { path: Routes.FAVORITES, element: <Favorites /> },
      { path: Routes.NOT_FOUND, element: <NotFound /> },
    ],
  },
]);
