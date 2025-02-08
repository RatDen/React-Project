import styles from './style.module.css';
import clsx from 'clsx';
import { PromoSliderItem } from './promo-slider-item';
import { PromoSlide } from '@/shared/types/preview/promo-slider.types';
import { useEffect, useMemo, useState } from 'react';
import { CONTENT_WIDTH, SLIDER_TRANSITION_DURATION } from '@/shared/config';
import { ArrowLeft, ArrowRight } from '@/app/assets/images';
import { useSliderAutoScroll } from '@/shared/hooks';

export type PromoSliderProps = {
  content: PromoSlide[];
};

export const PromoSlider = ({ content }: PromoSliderProps) => {
  const [slide, setSlide] = useState(2);
  const [transitionDuration, setTransitionDuration] = useState(
    SLIDER_TRANSITION_DURATION
  );
  useSliderAutoScroll(() => handleScrollSlider(1), 15000);

  const modifiedContent = useMemo(
    () => [
      content[content.length - 2],
      content[content.length - 1],
      ...content,
      content[0],
      content[1],
    ],
    [content]
  );

  // Следит за переходами на краях
  useEffect(() => {
    if (slide <= 1) {
      let timeout = setTimeout(() => {
        setTransitionDuration(0);
        setSlide(content.length + 1);
      }, SLIDER_TRANSITION_DURATION);
      return () => {
        if (timeout) {
          clearTimeout(timeout);
        }
      };
    }

    if (slide >= content.length + 2) {
      let timeout = setTimeout(() => {
        setTransitionDuration(0);
        setSlide(2);
      }, SLIDER_TRANSITION_DURATION);
      return () => {
        if (timeout) {
          clearTimeout(timeout);
        }
      };
    }
  }, [slide]);

  // Включает анимацию после перехода на краях
  useEffect(() => {
    if (transitionDuration === 0) {
      let timeout = setTimeout(() => {
        setTransitionDuration(SLIDER_TRANSITION_DURATION);
      }, SLIDER_TRANSITION_DURATION);
      return () => {
        if (timeout) {
          clearTimeout(timeout);
        }
      };
    }
  }, [transitionDuration]);

  const handleScrollSlider = (offset: 1 | -1) => {
    // Убирает возможный скачок при быстром прокликивании
    if (transitionDuration === 0) {
      let timeout = setTimeout(() => {
        setSlide((slide) => slide + offset);
        if (timeout) {
          clearTimeout(timeout);
        }
      }, SLIDER_TRANSITION_DURATION);
    } else {
      setSlide((slide) => slide + offset);
    }
  };

  const handleScrollLeft = () => {
    handleScrollSlider(-1);
  };

  const handleScrollRight = () => {
    handleScrollSlider(1);
  };

  return (
    <div className={styles.slider__container}>
      <div
        className={clsx(styles.slider__button, styles.slider__button_left)}
        onClick={handleScrollLeft}
      >
        <img
          src={ArrowLeft}
          alt='<'
          className={clsx(
            styles.slider__button_left__arrow,
            styles.slider__button__arrow_icon
          )}
        />
      </div>
      <div
        className={clsx(styles.slider__button, styles.slider__button_right)}
        onClick={handleScrollRight}
      >
        <img
          src={ArrowRight}
          alt='>'
          className={clsx(
            styles.slider__button_right__arrow,
            styles.slider__button__arrow_icon
          )}
        />
      </div>
      <ul
        className={styles.slider__content}
        style={{
          translate: -(slide * (CONTENT_WIDTH + 16)),
          transitionDuration: `${transitionDuration}ms`,
        }}
      >
        {modifiedContent.map((item, index) => (
          <li key={index} className={styles.slider__content__item}>
            <PromoSliderItem
              slide={item}
              isActive={index === slide}
              transitionDuration={transitionDuration}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
