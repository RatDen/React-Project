export type PromoSlide = {
  background: string;
  title?: string;
  promo?: string;
  release?: string;
  text: string;
  link: string;
  action: 'Смотреть бесплатно' | 'Смотреть по подписке' | 'Показать подборку';
  isInverted?: boolean;
};
