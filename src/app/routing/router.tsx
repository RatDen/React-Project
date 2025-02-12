import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const LazyLayout = lazy(() => import('@/pages').then(module => ({ default: module.Layout })));
const LazyFavorites = lazy(() => import('@/pages').then(module => ({ default: module.Favorites })));
const LazyMovies = lazy(() => import('@/pages').then(module => ({ default: module.Movies })));
const LazyMovie = lazy(() => import('@/pages').then(module => ({ default: module.Movie })));
const LazyHistory = lazy(() => import('@/pages').then(module => ({ default: module.History })));
const LazyNotFound = lazy(() => import('@/pages').then(module => ({ default: module.NotFound })));
const LazySearch = lazy(() => import('@/pages').then(module => ({ default: module.Search })));
const LazyHome = lazy(() => import('@/pages').then(module => ({ default: module.Home })));
const LazyProfile = lazy(() => import('@/pages').then(module => ({ default: module.Profile })));

import { Routes } from '../../shared/config';

export const router = createBrowserRouter([
  {
    path: Routes.ROOT,
    element: (
      <Suspense fallback={<div>Загрузка...</div>}>
        <LazyLayout />
      </Suspense>
    ),
    children: [
      { index: true, element: <Suspense fallback={<div>Загрузка...</div>}><LazyHome /></Suspense> },
      { path: Routes.MOVIES, element: <Suspense fallback={<div>Загрузка...</div>}><LazyMovies /></Suspense> },
      { path: Routes.MOVIE, element: <Suspense fallback={<div>Загрузка...</div>}><LazyMovie /></Suspense> },
      { path: Routes.PROFILE, element: <Suspense fallback={<div>Загрузка...</div>}><LazyProfile /></Suspense> },
      { path: Routes.HISTORY, element: <Suspense fallback={<div>Загрузка...</div>}><LazyHistory /></Suspense> },
      { path: Routes.FAVORITES, element: <Suspense fallback={<div>Загрузка...</div>}><LazyFavorites /></Suspense> },
      { path: Routes.SEARCH, element: <Suspense fallback={<div>Загрузка...</div>}><LazySearch /></Suspense> },
      { path: Routes.NOT_FOUND, element: <Suspense fallback={<div>Загрузка...</div>}><LazyNotFound /></Suspense> },
    ],
  },
]);
