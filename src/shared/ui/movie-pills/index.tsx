import styles from './style.module.css';

type MoviePillsProps = {
  countriesOfOrigin: string[] | undefined;
  genres: string[] | null | undefined;
};

export const MoviePills = ({ countriesOfOrigin, genres }: MoviePillsProps) => {
  return (
    <div className={styles.metaInfo_genres}>
      {countriesOfOrigin
        ? countriesOfOrigin.map((country, index) => (
            <div className={styles.metaInfo_genres__item} key={index}>
              <span>{country}</span>
            </div>
          ))
        : ''}
      {genres
        ? genres.map((genre, index) => (
            <div className={styles.metaInfo_genres__item} key={index}>
              <span>{genre}</span>
            </div>
          ))
        : ''}
    </div>
  );
};
