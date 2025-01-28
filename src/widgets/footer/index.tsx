import styles from './styles.module.css';
import clsx from 'clsx';
import SideSourceView from '@/shared/ui/side-source-view';
import { About, Sections, SideSources, Socials } from './lists';
import ActionLink from '@/shared/ui/action-link';
import ActionButton from '@/shared/ui/action-button';
import { Mail, NoAds, Phone } from '@/app/assets/images';

{
  /* TODO: Реализовать ссылки*/
}

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div
        className={clsx(styles.footer__content, styles.footer__content_border)}
      >
        <div className={styles.footer__info}>
          <div className={styles.footer__info_block}>
            <h3>О нас</h3>
            <ul className={styles.footer__list}>
              {About.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.footer__info_block}>
            <h3>Разделы</h3>
            <ul className={styles.footer__list}>
              {Sections.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
              <li key='special'>
                <a href='#' className='special_text'>
                  Активация сертификата
                </a>
              </li>
            </ul>
          </div>

          <div
            className={clsx(
              styles.footer__info_block,
              styles.footer__info_block_wide
            )}
          >
            <div className={styles.footer__info_block}>
              <h3>Служба поддержки</h3>
              <div>
                <p className={styles.footer__info_text}>
                  Мы всегда готовы вам помочь.
                </p>
                <p className={styles.footer__info_text}>
                  Наши операторы онлайн 24/7
                </p>
              </div>
            </div>

            <div className={styles.footer__button_group}>
              <div className={styles.footer__button_group_wrap}>
                <ActionLink href='#'>
                  <p className={styles.chat_button__text}>Написать в чате</p>
                </ActionLink>
              </div>
              <div className={styles.footer__button_group_wrap}>
                <ActionLink href='#' square>
                  <img src={Mail} alt='mail' />
                </ActionLink>
                <ActionButton square>
                  <img src={Phone} alt='phone' />
                </ActionButton>
              </div>
            </div>

            <div>
              <a href='#'>
                <h3>ask.ivi.ru</h3>
              </a>
              <p className={styles.footer__info_text}>Ответы на вопросы</p>
            </div>
          </div>

          <div
            className={clsx(
              styles.footer__info_block,
              styles.footer__info_block_wide,
              styles.footer__promo_block
            )}
          >
            <a href='#' className={styles.footer__promo_block__widget}>
              <img src={NoAds} alt='noAds' />
            </a>
            <p className={styles.footer__info_text}>
              Смотрите фильмы, сериалы и мультфильмы без рекламы
            </p>
          </div>
        </div>
      </div>
      <div className={styles.footer__content}>
        <div className={styles.footer__more}>
          <ul className={styles.footer__more_block}>
            {SideSources.map(({ link, image, alt, title, text }, index) => (
              <li key={index}>
                <ActionLink href={link}>
                  <SideSourceView
                    img={image}
                    alt={alt}
                    title={title}
                    text={text}
                  />
                </ActionLink>
              </li>
            ))}
          </ul>

          <div className={styles.footer__socials}>
            <ul className={styles.footer__more_block}>
              {Socials.map(({ link, image, alt }, index) => (
                <li key={index}>
                  <ActionLink href={link} round>
                    <img
                      src={image}
                      alt={alt}
                      className={styles.footer__socials__image}
                    />
                  </ActionLink>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.footer__copyright}>
            <p>© 2025 ООО «Иви.ру»</p>
            <p>
              HBO ® and related service marks are the property of Home Box
              Office, Inc
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
