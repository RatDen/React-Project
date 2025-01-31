import styles from './card.module.css';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa6';
import { RiShareForwardLine, RiShareForwardFill } from 'react-icons/ri';
import { PiMagicWand } from 'react-icons/pi';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { FaRegEyeSlash } from 'react-icons/fa6';
import { IoMdEyeOff } from 'react-icons/io';

function Card({ title, rating, year, country, duration, genre, category, image }) {
  return (
    <div className={styles.cardHover}>
      <div className={styles.card} style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className={styles.cardAbsolute}>
          <div className={styles.leftSide}>
            <div>
              {category === 'series' ? (
                <p className={styles.tag}>сериал Иви</p>
              ) : (
                ''
              )}
            </div>
            <div className={styles.text}>
              <h1>{rating}</h1>
              <p>
                {year}, {country}, {genre}
              </p>
              <p>{duration} мин</p>
            </div>
          </div>
          <div className={styles.rightSide}>
						<FaRegBookmark title="Буду смотреть" className={styles.icon} />
            <RiShareForwardLine title="Поделиться с друзьями" className={styles.icon} />
            <PiMagicWand title="Похожее" className={styles.icon} />
            <FaRegStar title="Уже смотрел, оценить" className={styles.icon} />
            <FaRegEyeSlash title="Не нравится такое" className={styles.icon} />
          </div>
        </div>
      </div>
      <h3>{title}</h3>
      {category === 'series' ? (
        <h4 style={{ color: 'red' }}>Подписка</h4>
      ) : (
        <h4>Бесплатно</h4>
      )}
    </div>
  );
}

export default Card;
