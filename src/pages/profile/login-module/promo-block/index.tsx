import styles from './styles.module.css';
import { Notification, Support } from '@/app/assets/images';
import { ExternalLinks, Routes } from '@/shared/config';
import { SubscriptionsLink, CertificateButton, Uid } from '@/widgets';
import { Link } from 'react-router';

export const PromoBlock = () => {
  return (
    <div className={styles.container}>
      <SubscriptionsLink />
      <CertificateButton />
      <div className={styles.info}>
        <Link to={Routes.PROFILE_NOTIFICATIONS}>
          <img src={Notification} alt='Колокол' className={styles.info__icon} />
          <p>Уведомления</p>
        </Link>
        <a href={ExternalLinks.SUPPORT}>
          <img src={Support} alt='Наушники' className={styles.info__icon} />
          <p>Помощь</p>
        </a>
        <Uid />
      </div>
    </div>
  );
};
