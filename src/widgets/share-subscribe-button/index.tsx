import styles from './styles.module.css';
import { Ivi } from '@/app/assets/images';
import { ActionButton } from '@/shared/ui';

export const ShareSubscribeButton = () => (
  <ActionButton>
    <div className={styles.button__background} />
    <div className={styles.button_content}>
      <img src={Ivi} alt='Иви' className={styles.button_content__icon} />
      <div className={styles.button_content__text_wrap}>
        <h2>Поделиться подпиской</h2>
        <p className={styles.button_content__text}>Подключить и попробовать</p>
      </div>
    </div>
  </ActionButton>
);
