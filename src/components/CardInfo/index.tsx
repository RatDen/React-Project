import styles from './styles.module.css';

import { Movie } from '@/shared/types/movie.types';

export interface CardInfoProps {
  movie: Movie;
}

export const CardInfo = ({ movie }: CardInfoProps) => {
  return (
    <section className={styles.firstScreen}>
      <div className={styles.firstScreenWrapper}>
        <img
          className={styles.firstScreen_img}
          src='/public/moviePoster.jpg'
          alt='Poster for a movie'
        />
        <div className={styles.firstScreen_info}>
          <h1>Министерство неджентльменских дел</h1>
          <section className={styles.metaInfo}>
            <ul className={styles.metaInfo_details}>
              <li className={styles.metaInfo_details__rating}>8.1</li>
              <li className={styles.metaInfo_details__releaseYear}>2024</li>
              <li className={styles.metaInfo_details__duration}>124 мин.</li>
              <li className={styles.metaInfo_details__isAdult}>18+</li>
            </ul>
            <div className={styles.metaInfo_genres}>
              <div className={styles.metaInfo_genres__items}>
                <span>США</span>
              </div>
              <div className={styles.metaInfo_genres__items}>
                <span>Боевики</span>
              </div>
              <div className={styles.metaInfo_genres__items}>
                <span>Драмы</span>
              </div>
              <div className={styles.metaInfo_genres__items}>
                <span>Военные</span>
              </div>
            </div>
            <div className={styles.metaInfo_synopsis}>
              Отряд дерзких смельчаков идёт на невыполнимую миссию против
              нацистов. Комедийный боевик Гая Ричи.
            </div>
            <div className={styles.metaInfo_monetization}>
              <div className={styles.metaInfo_buttons}>
                <div className={styles.buySubscription}>
                  <span className={styles.buySubscription_primaryText}>
                    Смотреть{' '}
                  </span>
                  <span className={styles.buySubscription_secondaryText}>
                    по подписке Иви
                  </span>
                </div>
                <div className={styles.favorite}>
                  <div className={styles.iconWrapper}>
                    <span>Fv</span>
                  </div>
                </div>
                <div className={styles.share}>
                  <div className={styles.iconWrapper}>
                    <span>Sh</span>
                  </div>
                </div>
              </div>
              <div className={styles.noteText}>
                <span>Первые 30 дней бесплатно</span>
              </div>
            </div>
            <div className={styles.moreDetails}>
              <h3 className={styles.moreDetails_title}>Режиссер</h3>
              <ul className={styles.moreDetails_list}>
                <li>Шон Бэйкер</li>
              </ul>
              <h3 className={styles.moreDetails_title}>В главных ролях</h3>
              <ul className={styles.moreDetails_list}>
                <li>Майки Мэдисон</li>
                <li>Марк Эйдельштейн</li>
                <li>Юра Борисов</li>
              </ul>
            </div>
          </section>
        </div>
        <div className={styles.firstScreen_moreInfo}></div>
      </div>
    </section>
  );
};
