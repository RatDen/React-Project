import { LOCAL_STORAGE_TOKEN_ACCESS, LOCAL_STORAGE_USER } from '../config/api';
import { User } from '../types/user.types';

// localStorage TokenAccess
export const setTokenAccess = (token: string) => {
  return localStorage.setItem(LOCAL_STORAGE_TOKEN_ACCESS, token);
};

export const getTokenAccess = () => {
  return localStorage.getItem(LOCAL_STORAGE_TOKEN_ACCESS);
};

// localStorage User
export const setLocalUser = (user: User & { password: string }) => {
  return localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(user));
};

export const getLocalUser = (): (User & { password: string }) | null => {
  const userString = localStorage.getItem(LOCAL_STORAGE_USER);
  if (userString) {
    return JSON.parse(userString);
  } else {
    return null;
  }
};

export const deleteLocalUser = () => {
  return localStorage.removeItem(LOCAL_STORAGE_USER);
};
