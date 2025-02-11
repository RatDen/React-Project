import { FC } from 'react';
import styles from './styles.module.css';
import { CardIcons } from '@/components/Cards/CardIcons';

const CATEGORY = 'series';

export interface CardProps {
  title: string;
  image: string;
  rating?: number;
  year?: number;
  country?: string;
  duration?: number | '';
  genre?: string;
  category?: string;
}

export const Card: FC<CardProps> = ({
  title,
  rating,
  year,
  country,
  duration,
  genre,
  category,
  image,
}) => {
  return (
    <div className={styles.cardContainer}>
      {category === CATEGORY ? <p className={styles.tag}>сериал Иви</p> : null}
      <div
        className={styles.card}
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className={styles.cardBG}>
          <div className={styles.leftSide}>
            <div className={styles.text}>
              <h1>{rating}</h1>
              <p className={styles.desc}>
                {year}, {country}, {genre}
              </p>
              <p>{duration} мин</p>
            </div>
          </div>
          <div className={styles.rightSide}>
            <CardIcons className={styles.icons} />
          </div>
        </div>
      </div>
      <h3 className={styles.name}>{title}</h3>
    </div>
  );
};
