import { Middleware, MiddlewareAPI } from '@reduxjs/toolkit';

export const queryLoggerMiddleware: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    console.groupCollapsed('dispatching', action);
    console.log('prew state', api.getState());
    let result = next(action);
    console.log('next state', api.getState());
    console.groupEnd();
    return result;
  };
