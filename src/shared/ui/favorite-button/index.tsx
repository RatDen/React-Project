import { FavoriteIcon } from '@/app/assets/images';
import styles from './styles.module.css';

export const FavBtn = () => (
  <div className={styles.favorite}>
    <div className={styles.iconWrapper}>
      <img
        className={styles.favIconImg}
        src={FavoriteIcon}
        alt='Add to favorites'
      />
    </div>
  </div>
);
