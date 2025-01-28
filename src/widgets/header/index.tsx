import styles from './styles.module.css';
import NavMenu from '../navigation-menu';
import Logo from '@images/svg/iviLogo.svg?react';
import ActionButton from '@/shared/ui/action-button';
import { Avatar, Bell, Search } from '@/app/assets/images';
import ActionLink from '@/shared/ui/action-link';

{
  /* TODO: реализовать анимацию наведения (сделать компонент-обертку для элементов хедера) */
}

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <div className={styles.header__content_wrap}>
          <Logo />
          <NavMenu />
        </div>
        <div className={styles.header__actions_wrap}>
          {/* TODO: реализовать поиск, избранное(?), личный кабинет */}
          <ActionButton promo>
            <p className={styles.header__button_text}>Оплатить подписку</p>
          </ActionButton>
          <a href='#' className={styles.header__link}>
            <Search />
            <p>Поиск</p>
          </a>
          <a href='#' className={styles.header__link}>
            <Bell />
          </a>
          <div className={styles.header__profile_button}>
            <ActionLink href='#'>
              <div className={styles.header__profile_button_wrap}>
                <img
                  src={Avatar}
                  alt='Аватар'
                  className={styles.header__profile_button__icon}
                />
                <p className={styles.header__profile_button__text}>Войти</p>
              </div>
            </ActionLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
