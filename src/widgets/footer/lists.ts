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

export type SimpleLink = {
  link: string;
  title: string;
};

export const About: SimpleLink[] = [
  {
    link: '#',
    title: 'О компании',
  },
  {
    link: '#',
    title: 'Вакансии',
  },
  {
    link: '#',
    title: 'Программа бета-тестирования',
  },
  {
    link: '#',
    title: 'Информация для партнёров',
  },
  {
    link: '#',
    title: 'Размещение рекламы',
  },
  {
    link: '#',
    title: 'Пользовательское соглашение',
  },
  {
    link: '#',
    title: 'Политика конфиденциальности',
  },
  {
    link: '#',
    title: 'На Иви применяются \n рекомендательные технологии',
  },
  {
    link: '#',
    title: 'Комплаенс',
  },
  {
    link: '#',
    title: 'Оставить отзыв',
  },
];

export const Sections: SimpleLink[] = [
  {
    link: '#',
    title: 'Мой Иви',
  },
  {
    link: '#',
    title: 'Что нового',
  },
  {
    link: '#',
    title: 'Фильмы',
  },
  {
    link: '#',
    title: 'Сериалы',
  },
  {
    link: '#',
    title: 'Мультфильмы',
  },
  {
    link: '#',
    title: 'ТВ',
  },
  {
    link: '#',
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
    link: '',
    title: 'App Store',
    text: 'Загрузить в',
    image: Apple,
    alt: 'apple',
  },
  {
    link: '',
    title: 'Google Play',
    text: 'Доступно в',
    image: GooglePlay,
    alt: 'google play',
  },
  {
    link: '',
    title: 'Smart TV',
    text: 'Смотрите на',
    image: SmartTv,
    alt: 'smart tv',
  },
  {
    link: '',
    title: 'RuStore',
    text: 'Скачайте из',
    image: RuStore,
    alt: 'ruStore',
  },
  {
    link: '',
    title: 'AppGallery',
    text: 'Откройте в',
    image: AppGallery,
    alt: 'appGallery',
  },
  {
    link: '',
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
    link: '',
    image: VK,
    alt: 'Vk',
  },
  {
    link: '',
    image: Odnoklassniki,
    alt: 'Odnoklassniki',
  },
  {
    link: '',
    image: Twitter,
    alt: 'Twitter',
  },
  {
    link: '',
    image: Viber,
    alt: 'Viber',
  },
  {
    link: '',
    image: LinkedIn,
    alt: 'LinkedIn',
  },
  {
    link: '',
    image: Telegram,
    alt: 'Telegram',
  },
];
