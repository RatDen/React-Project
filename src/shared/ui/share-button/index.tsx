import { ShareIcon } from '@/app/assets/images';
import styles from './styles.module.css';

export const ShareBtn = () => (
  <div className={styles.share}>
    <div className={styles.iconWrapper}>
      <img src={ShareIcon} alt='Share' />
    </div>
  </div>
);
