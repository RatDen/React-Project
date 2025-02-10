import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_LOGIN_URL } from '@/shared/config/api';
import {
  getTokenAccess,
  setLocalUser,
  setTokenAccess,
} from '@/shared/libs/utils';
import { UserLoginData, UserLoginResponce } from './user-api.types';
import { User } from '@/shared/types/user.types';
import { Endpoints } from '@/shared/config';

export const userApi = createApi({
  reducerPath: 'userApi',
  tagTypes: ['User'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_LOGIN_URL,
    prepareHeaders: (headers) => {
      const token = getTokenAccess();
      if (token) {
        headers.set('Authorization', `${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    UserLogin: build.mutation<User, UserLoginData>({
      query: (body) => ({
        url: Endpoints.AUTH_LOGIN,
        method: 'POST',
        body: body,
      }),
      transformResponse: (responce: UserLoginResponce) => {
        if (responce.Success) {
          setTokenAccess(responce.Data.AccessToken);
          // эмуляция сохранения пользователя (апишка простенькая)
          setLocalUser({ ...responce.Data, password: '12345' });
          return { ...responce.Data };
        } else {
          return responce.Data;
        }
      },
    }),
  }),
});
