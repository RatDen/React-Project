import { getYear } from '@/shared/utils/helperFunctions';
import styles from './styles.module.css';
import { useAppDispatch, useAppSelector } from '@/app/store';
import { toggleFavorite } from '@/services/favoriteSlice';
import { Movie } from '@/shared/types/movie.types';
import { ActionWatch, FavBtn, MoviePills, ShareBtn } from '@/shared/ui';
import { useShareToTelegram } from '@/shared/hooks/useShareToTelegram';

export interface CardInfoProps {
  movie: Movie;
	id: string;
}

export const CardInfo = ({ movie, id }: CardInfoProps) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorite.favorites);

  const isFavorite = favorites.includes(id);

  const handleToggle = () => {
    dispatch(toggleFavorite(id));
  };
    
  const shareText = 'Посмотри этот фильм: ';
  const handleShare = useShareToTelegram(movie?.url, shareText);

  return (
    <section className={styles.firstScreen}>
      <div className={styles.firstScreenWrapper}>
        <img
          className={styles.firstScreen_img}
          src={movie.primaryImage}
          alt='Poster for a movie'
        />
        <div className={styles.firstScreen_info}>
          <h1>{movie.primaryTitle}</h1>
          <section className={styles.metaInfo}>
            <ul className={styles.metaInfo_details}>
              {movie.averageRating && (
                <li className={styles.metaInfo_details__rating}>
                  {movie.averageRating}
                </li>
              )}
              <li className={styles.metaInfo_details__releaseYear}>
                {getYear(movie.releaseDate)}
              </li>
              {movie.runtimeMinutes && (
                <li className={styles.metaInfo_details__duration}>
                  {movie.runtimeMinutes} мин.
                </li>
              )}
              <li className={styles.metaInfo_details__isAdult}>
                {movie.isAdult}
              </li>
            </ul>
            <MoviePills
              countriesOfOrigin={movie.countriesOfOrigin}
              genres={movie.genres}
            />
            <div className={styles.metaInfo_synopsis}>{movie.description}</div>
            <div className={styles.metaInfo_monetization}>
              <div className={styles.metaInfo_buttons}>
                <ActionWatch />
                <FavBtn isFavorite={isFavorite} onClick={handleToggle}/>
                <ShareBtn onClick={handleShare}/>
              </div>
              <div className={styles.noteText}>
                <span>Первые 30 дней бесплатно</span>
              </div>
            </div>
          </section>
        </div>
        <div className={styles.firstScreen_moreInfo}></div>
      </div>
    </section>
  );
};
