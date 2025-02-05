import React, { FC, useState } from 'react';
import styles from './card.module.css';
import { Icons } from './Icons';

const CATEGORY = 'series';

export interface CardProps {
  title: string;
  rating: number;
  year: number;
  country: string;
  duration: number;
  genre: string;
  category: string;
  image: string;
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
            <Icons className={styles.icons} />
          </div>
        </div>
      </div>
      <h3 className={styles.name}>{title}</h3>
      {category === CATEGORY ? (
        <h4 className={styles.status} style={{ color: 'red' }}>
          Подписка
        </h4>
      ) : (
        <h4 className={styles.status}>Бесплатно</h4>
      )}
    </div>
  );
};
