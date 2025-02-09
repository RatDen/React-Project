import { createBrowserRouter } from 'react-router-dom';

import {
  Layout,
  Favorites,
  Movies,
  Movie,
  SignIn,
  SignUp,
  History,
  Home,
  Profile,
} from '@/pages';
import { Routes } from '../../shared/config';

export const router = createBrowserRouter([
  {
    path: Routes.ROOT,
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: Routes.MOVIES, element: <Movies /> },
      { path: Routes.MOVIE, element: <Movie /> },
      { path: Routes.PROFILE, element: <Profile /> },
      { path: Routes.SIGNIN, element: <SignIn /> },
      { path: Routes.SIGNUP, element: <SignUp /> },
      { path: Routes.HISTORY, element: <History /> },
      { path: Routes.FAVORITES, element: <Favorites /> },
    ],
  },
]);
