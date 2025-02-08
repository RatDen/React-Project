import styles from './styles.module.css';
import { PromoSlide } from '@/shared/types/preview/promo-slider.types';
import { Link } from 'react-router';
import { SlideButton } from './slide-button';
import clsx from 'clsx';

export type PromoSliderItemProps = {
  slide: PromoSlide;
  isActive?: boolean;
  transitionDuration?: number;
};

export const PromoSliderItem = ({
  slide,
  isActive = false,
  transitionDuration = 0,
}: PromoSliderItemProps) => {
  return (
    <Link
      to={slide.link}
      className={clsx(
        styles.slide__container,
        isActive ? styles.slide_active : ''
      )}
      style={{ transitionDuration: `${transitionDuration}ms` }}
    >
      <img
        src={slide.background}
        alt='poster'
        className={styles.slide__image}
      />
      <div className={styles.slide__preview}>
        <div className={styles.slide__preview_wrap}>
          <div
            className={clsx(
              styles.slide__info,
              slide.isInverted ? styles.color_inverted : ''
            )}
          >
            {slide.promo && <img src={slide.promo} alt='promo' />}
            {slide.title && <h1>{slide.title}</h1>}
            <p className={styles.slide__info_text}>{slide.text}</p>
          </div>
          <div className={styles.button_wrap}>
            <SlideButton text={slide.action} />
          </div>
        </div>
      </div>
    </Link>
  );
};
