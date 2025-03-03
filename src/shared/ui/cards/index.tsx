import styles from './styles.module.css';
import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Link } from 'react-router-dom';
import { Routes } from '@/shared/config';
import { getYear } from '@/shared/utils/helperFunctions';
import { ArrowLeft, ArrowRight } from '@/app/assets/images';
import { Movie } from '@/shared/types/movie.types';
import { Card } from './card';

type CardsProps = {
  title: string;
  data: Movie[];
};

export const Cards = ({ title, data }: CardsProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className={styles.cardsContainer}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.embla}>
        <div className={styles.embla__viewport} ref={emblaRef}>
          <ul className={styles.embla__container}>
            {data &&
              data
                .filter((movie) => movie.primaryImage)
                .map((movie) => (
                  <li className={styles.embla__slide} key={movie.id}>
                    <Link to={`${Routes.MOVIES}${movie.id}`} key={movie.id}>
                      <Card
                        id={movie.id}
                        url={movie.url}
                        title={movie.primaryTitle}
                        image={movie.primaryImage}
                        rating={movie.averageRating || undefined}
                        year={getYear(movie.releaseDate)}
                        country={
                          movie.countriesOfOrigin
                            ? movie.countriesOfOrigin[0]
                            : ''
                        }
                        duration={movie.runtimeMinutes || ''}
                        genre={movie.genres ? movie.genres[0] : ''}
                        category={movie.type || 'Фильм'}
                      />
                    </Link>
                  </li>
                ))}
          </ul>
        </div>
      </div>

      <div className={styles.embla__prev} onClick={scrollPrev}>
        <img src={ArrowLeft} alt='Slider arrow left' />
      </div>
      <div className={styles.embla__next} onClick={scrollNext}>
        <img src={ArrowRight} alt='Slider arrow right' />
      </div>

      <div className={styles.slider}>
        <div className={styles.container}></div>
      </div>
    </section>
  );
};
