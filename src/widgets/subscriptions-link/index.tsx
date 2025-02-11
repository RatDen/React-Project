import styles from './styles.module.css';
import { Quality } from '@/app/assets/images';
import { ActionLink } from '@/shared/ui';

export const SubscriptionsLink = () => (
  <ActionLink href='/profile/subscriptions'>
    <div className={styles.button_content}>
      <img src={Quality} alt='Алмаз' />
      <div className={styles.button_content__text_wrap}>
        <h2>Все подписки</h2>
        <p className={styles.button_content__text}>Выбрать</p>
      </div>
    </div>
  </ActionLink>
);
