import { FavoriteIcon, FavoriteRemove } from '@/app/assets/images';
import styles from './styles.module.css';

interface FavBtnProps {
  isFavorite: boolean;
}

export const FavBtn: React.FC<FavBtnProps> = ({ isFavorite, onClick }) => (
  <div className={styles.favorite} onClick={onClick}>
    <div className={styles.iconWrapper}>
      <img
        className={styles.favIconImg}
        src={isFavorite ? FavoriteRemove: FavoriteIcon}
        alt='Add to favorites'
      />
    </div>
  </div>
);
