import styles from './styles.module.css';
import { Gift, SmartTv32, Support32 } from '@/app/assets/images';
import { ExternalLinks } from '@/shared/config';
import { ActionLink, ActionButton, ActionLinkExternal } from '@/shared/ui';
import {
  ShareSubscribeButton,
  SubscriptionsLink,
  CertificateButton,
} from '@/widgets';
import { Actions } from './actions';

export const PromoBlock = () => {
  return (
    <div className={styles.profile__links}>
      <div className={styles.profile__promo}>
        <ShareSubscribeButton />
        <SubscriptionsLink />
        <CertificateButton />
        <div className={styles.promo__certificate}>
          <ActionLinkExternal href={ExternalLinks.CERTIFICATE_SHARE}>
            <img src={Gift} alt='Подарок' />
            <p>Подари подписку ближним</p>
          </ActionLinkExternal>
        </div>
      </div>
      <ul className={styles.profile__actions}>
        {Actions.map((action, index) => (
          <li key={index}>
            <ActionLink href={action.link}>
              <div className={styles.profile__actions__item}>
                <img
                  src={action.image}
                  alt={action.title}
                  className={styles.profile__actions__image}
                />
                <p>{action.title}</p>
              </div>
            </ActionLink>
          </li>
        ))}
        <ActionButton>
          <div className={styles.profile__actions__item}>
            <img
              src={SmartTv32}
              alt='Вход по коду'
              className={styles.profile__actions__image}
            />
            <p>Вход по коду</p>
          </div>
        </ActionButton>
        <ActionLinkExternal href={ExternalLinks.SUPPORT}>
          <div className={styles.profile__actions__item}>
            <img
              src={Support32}
              alt='Помощь'
              className={styles.profile__actions__image}
            />
            <p>Помощь</p>
          </div>
        </ActionLinkExternal>
      </ul>
    </div>
  );
};
