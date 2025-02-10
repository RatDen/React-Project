import styles from './styles.module.css';
import { ActionButton } from '@/shared/ui';
import { Certificate } from '@/app/assets/images';

export const CertificateButton = () => (
  <ActionButton>
    <div className={styles.button_content}>
      <img src={Certificate} alt='Медаль' />
      <div className={styles.button_content__text_wrap}>
        <h2>Сертификат и промокод</h2>
        <p className={styles.button_content__text}>Активировать</p>
      </div>
    </div>
  </ActionButton>
);
