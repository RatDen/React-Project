import {
  AnyDev,
  AppGallery,
  Apple,
  GooglePlay,
  RuStore,
  SmartTv,
} from '@/app/assets/images';

import {
  VK,
  Odnoklassniki,
  Twitter,
  Viber,
  LinkedIn,
  Telegram,
} from '@/app/assets/images';
import { Routes } from '@/shared/config';

export type SimpleLink = {
  link: string;
  title: string;
};

export const About: SimpleLink[] = [
  {
    link: 'https://corp.ivi.ru/',
    title: 'О компании',
  },
  {
    link: 'https://corp.ivi.ru/career/#career-vacancy-block',
    title: 'Вакансии',
  },
  {
    link: '/pages/beta',
    title: 'Программа бета-тестирования',
  },
  {
    link: '/info/partners',
    title: 'Информация для партнёров',
  },
  {
    link: 'https://corp.ivi.ru/advertisers/',
    title: 'Размещение рекламы',
  },
  {
    link: '/info/agreement',
    title: 'Пользовательское соглашение',
  },
  {
    link: '/info/confidential',
    title: 'Политика конфиденциальности',
  },
  {
    link: '/info/recomtech',
    title: 'На Иви применяются \n рекомендательные технологии',
  },
  {
    link: '/info/goryachaya-liniya-komplaens',
    title: 'Комплаенс',
  },
  {
    link: '/reviews',
    title: 'Оставить отзыв',
  },
];

export const Sections: SimpleLink[] = [
  {
    link: Routes.ROOT,
    title: 'Мой Иви',
  },
  {
    link: Routes.NEW,
    title: 'Что нового',
  },
  {
    link: Routes.MOVIES,
    title: 'Фильмы',
  },
  {
    link: Routes.SERIES,
    title: 'Сериалы',
  },
  {
    link: Routes.ANIMATION,
    title: 'Мультфильмы',
  },
  {
    link: Routes.TVPLUS,
    title: 'ТВ',
  },
  {
    link: Routes.GOOD_MOVIES,
    title: 'Что посмотреть',
  },
];

export type SideSource = {
  link: string;
  title: string;
  text: string;
  image: string;
  alt: string;
};

export const SideSources: SideSource[] = [
  {
    link: 'https://go.onelink.me/app/devicesiOS',
    title: 'App Store',
    text: 'Загрузить в',
    image: Apple,
    alt: 'apple',
  },
  {
    link: 'https://go.onelink.me/app/devicesAndroid',
    title: 'Google Play',
    text: 'Доступно в',
    image: GooglePlay,
    alt: 'google play',
  },
  {
    link: '/pages/tvsmart',
    title: 'Smart TV',
    text: 'Смотрите на',
    image: SmartTv,
    alt: 'smart tv',
  },
  {
    link: 'https://www.rustore.ru/catalog/app/ru.ivi.client',
    title: 'RuStore',
    text: 'Скачайте из',
    image: RuStore,
    alt: 'ruStore',
  },
  {
    link: 'https://appgallery.huawei.com/app/C102340619',
    title: 'AppGallery',
    text: 'Откройте в',
    image: AppGallery,
    alt: 'appGallery',
  },
  {
    link: '/devices',
    title: 'Все устройства',
    text: '',
    image: AnyDev,
    alt: 'устройства',
  },
];

export type SocialsLink = {
  link: string;
  image: string;
  alt: string;
};

export const Socials: SocialsLink[] = [
  {
    link: 'https://vk.com/iviru?crc=fa4448c13e06e69ba9e814e8743c7e2e',
    image: VK,
    alt: 'Vk',
  },
  {
    link: 'https://ok.ru/ivi.ru',
    image: Odnoklassniki,
    alt: 'Odnoklassniki',
  },
  {
    link: 'https://twitter.com/ivi_ru',
    image: Twitter,
    alt: 'Twitter',
  },
  {
    link: 'https://vb.me/a0544c',
    image: Viber,
    alt: 'Viber',
  },
  {
    link: 'https://www.linkedin.com/company/2543415/',
    image: LinkedIn,
    alt: 'LinkedIn',
  },
  {
    link: 'https://t.me/official_iviru',
    image: Telegram,
    alt: 'Telegram',
  },
];
