import { Routes } from '@/shared/config/router';
import {
  Account32,
  Checks32,
  Devices32,
  Favorites32,
  History32,
  Notifications32,
  Payments32,
  Purchases32,
  Settings32,
} from '@/app/assets/images';

export type ProfileAction = {
  link: string;
  image: string;
  title: string;
};

export const Actions: ProfileAction[] = [
  {
    link: Routes.PROFILE_ACCOUNTS,
    image: Account32,
    title: 'Мои аккаунты',
  },
  {
    link: Routes.PROFILE_NOTIFICATIONS,
    image: Notifications32,
    title: 'Уведомления',
  },
  {
    link: Routes.PROFILE_PURCHASES,
    image: Purchases32,
    title: 'Покупки',
  },
  {
    link: Routes.PROFILE_FAVORITES,
    image: Favorites32,
    title: 'Буду смотреть',
  },
  {
    link: Routes.PROFILE_WATCHED,
    image: History32,
    title: 'Просмотры',
  },
  {
    link: Routes.PROFILE_DEVICES,
    image: Devices32,
    title: 'Мои устройства',
  },
  {
    link: Routes.PROFILE_PAYMENTS,
    image: Payments32,
    title: 'Способ оплаты',
  },
  {
    link: Routes.PROFILE_CHECKS,
    image: Checks32,
    title: 'Чеки',
  },
  {
    link: Routes.PROFILE_SETTINGS,
    image: Settings32,
    title: 'Настройки',
  },
];
