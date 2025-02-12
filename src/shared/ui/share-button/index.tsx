import { ShareIcon } from '@/app/assets/images';
import styles from './styles.module.css';

interface ShareBtnProps {
	onClick?: () => void
}

export const ShareBtn: React.FC<ShareBtnProps> = ({onClick}) => (
  <div className={styles.share} onClick={onClick}>
    <div className={styles.iconWrapper}>
      <img src={ShareIcon} alt='Share' />
    </div>
  </div>
);
