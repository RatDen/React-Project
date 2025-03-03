import styles from './styles.module.css';
import { InfoItem } from './info-item';
import { About, Sections } from '../lists';
import { ActionLink, ActionButton, ActionLinkExternal } from '@/shared/ui';
import { Mail, NoAds, Phone } from '@/app/assets/images';
import { Link } from 'react-router';
import { ExternalLinks, Routes } from '@/shared/config';

export const Info = () => {
  return (
    <div className={styles.container}>
      <InfoItem title='О нас'>
        <ul className={styles.info_list}>
          {About.map((item, index) => (
            <li key={index}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </InfoItem>
      <InfoItem title='Разделы'>
        <ul className={styles.info_list}>
          {Sections.map((item, index) => (
            <li key={index}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
          <li key='special'>
            <Link to={Routes.CERT} className='special_text'>
              Активация сертификата
            </Link>
          </li>
        </ul>
      </InfoItem>
      <InfoItem title='Служба поддержки' wide>
        <p>{'Мы всегда готовы вам помочь. \n Наши операторы онлайн 24/7'}</p>

        <div className={styles.button_group}>
          <div className={styles.button_group_wrap}>
            <ActionLink href={Routes.PROFILE_SUPPORT}>
              <p className={styles.chat_button__text}>Написать в чате</p>
            </ActionLink>
          </div>
          <div className={styles.button_group_wrap}>
            <ActionLinkExternal href={ExternalLinks.MAIL_TO} form='square'>
              <img src={Mail} alt='mail' />
            </ActionLinkExternal>
            <ActionButton form='square'>
              <img src={Phone} alt='phone' />
            </ActionButton>
          </div>
        </div>

        <div>
          <a href={ExternalLinks.SUPPORT}>
            <h3 className={styles.info__article__header}>ask.ivi.ru</h3>
          </a>
          <p>Ответы на вопросы</p>
        </div>
      </InfoItem>

      <InfoItem wide centered>
        <button className={styles.promo_widget}>
          <img src={NoAds} alt='noAds' />
        </button>
        <p>Смотрите фильмы, сериалы и мультфильмы без рекламы</p>
      </InfoItem>
    </div>
  );
};
