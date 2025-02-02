import React, { FC } from 'react';
import styles from './card.module.css';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa6';
import { RiShareForwardLine, RiShareForwardFill } from 'react-icons/ri';
import { PiMagicWand } from 'react-icons/pi';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { FaRegEyeSlash } from 'react-icons/fa6';
import { IoMdEyeOff } from 'react-icons/io';

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
}) =>
  <div className={styles.cardContainer}>
    <div
      className={styles.card}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className={styles.cardBG}>
        <div className={styles.leftSide}>
          <div>
            {category === `${CATEGORY}` ? (
              <p className={styles.tag}>сериал Иви</p>
            ) : null}
          </div>
          <div className={styles.text}>
            <h1>{rating}</h1>
            <p className={styles.desc}>
              {year}, {country}, {genre}
            </p>
            <p>{duration} мин</p>
          </div>
        </div>
        <div className={styles.rightSide}>
          <FaRegBookmark title='Буду смотреть' className={styles.icon} />
          <RiShareForwardLine
            title='Поделиться с друзьями'
            className={styles.icon}
          />
          <PiMagicWand title='Похожее' className={styles.icon} />
          <FaRegStar title='Уже смотрел, оценить' className={styles.icon} />
          <FaRegEyeSlash title='Не нравится такое' className={styles.icon} />
        </div>
      </div>
    </div>
    <h3 className={styles.name}>{title}</h3>
    {category === `${CATEGORY}` ? (
      <h4 className={styles.status} style={{ color: 'red' }}>
        Подписка
      </h4>
    ) : (
      <h4 className={styles.status}>Бесплатно</h4>
    )}
  </div>
