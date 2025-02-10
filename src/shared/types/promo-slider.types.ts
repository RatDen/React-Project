export type PromoSlide = {
  background: string;
  text: string;
  link: string;
  action: 'Смотреть бесплатно' | 'Смотреть по подписке' | 'Показать подборку';
  title?: string;
  promo?: string;
  release?: string;
  isInverted?: boolean;
};
