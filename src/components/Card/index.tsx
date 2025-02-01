import styles from './styles.module.css';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa6';
import { RiShareForwardLine, RiShareForwardFill } from 'react-icons/ri';
import { PiMagicWand } from 'react-icons/pi';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { FaRegEyeSlash } from 'react-icons/fa6';
import { IoMdEyeOff } from 'react-icons/io';

type CardProps = {
  title: string;
  rating: number;
  year: number;
  country: string;
  duration: number;
  genre: string;
  image: string;
};

function Card({
  title,
  rating,
  year,
  country,
  duration,
  genre,
  image,
}: CardProps) {
  return (
    <div className={styles.cardHover}>
      <div
        className={styles.card}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className={styles.cardAbsolute}>
          <div className={styles.leftSide}>
            <div className={styles.text}>
              <h1>{rating}</h1>
              <p>
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
      <h3>{title}</h3>
    </div>
  );
}

export default Card;
