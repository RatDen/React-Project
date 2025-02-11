import { FC } from 'react';
import styles from './styles.module.css';
import { CardIcons } from './card-icons';

const CATEGORY = 'series';

export interface CardProps {
	id: string,
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
	id,
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
            <CardIcons className={styles.icons} id={id}/>
          </div>
        </div>
      </div>
      <h3 className={styles.name}>{title}</h3>
    </div>
  );
};
