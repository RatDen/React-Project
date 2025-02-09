const { VITE_APP_API_LOGIN_URL: APP_API_LOGIN_URL } = import.meta.env;

//TODO: Сделать чтобы грузилось из .env
export const API_LOGIN_URL: string = 'https://www.quickpickdeal.com/api';

export const LOCAL_STORAGE_TOKEN_ACCESS = 'token_access';
export const LOCAL_STORAGE_USER = 'local_user';

export const FIXED_CACHE_KEY_USER = 'user_cache_key';
