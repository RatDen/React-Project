export const Routes = {
  ROOT: '/',
  PROFILE: '/profile',
  PROFILE_ACCOUNTS: '/profile/accounts',
  PROFILE_NOTIFICATIONS: '/profile/notifications',
  PROFILE_PURCHASES: '/profile/purchases',
  PROFILE_FAVORITES: '/profile/favorites',
  PROFILE_WATCHED: '/profile/watched',
  PROFILE_DEVICES: '/profile/devices',
  PROFILE_PAYMENTS: '/profile/payments',
  PROFILE_CHECKS: '/profile/checks',
  PROFILE_SETTINGS: '/profile/settings',
  MOVIES: '/movies',
  MOVIE: '/movies/:id',
  SERIES: '/series',
  ANIMATION: '/animation',
  TVPLUS: '/tvplus',
  SIGNIN: '/signin',
  SIGNUP: '/signup',
  HISTORY: '/history',
  FAVORITES: '/favorites',
  NOT_FOUND: '*',
} as const;

export const ExternalLinks = {
  SUPPORT: 'https://ask.ivi.ru',
  CERTIFICATE_SHARE: 'https://widget.mgc-loyalty.ru/iviru/landing',
} as const;
