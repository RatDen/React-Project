import { User } from '@/shared/types/user.types';

export type UserLoginData = {
  email: string;
  password: string;
};

export type UserLoginResponce = {
  Success: boolean;
  Error: string | null;
  Data: User & { AccessToken: string };
};
