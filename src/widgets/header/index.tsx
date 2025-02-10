import styles from './styles.module.css';
import Logo from '@images/svg/iviLogo.svg?react';
import { NavMenu } from '../navigation-menu';
import { Avatar as AvatarIcon, Bell, Search } from '@/app/assets/images';
import { ActionButton, ActionLink } from '@/shared/ui';
import { Link } from 'react-router-dom';
import { Routes } from '@/shared/config';
import { userApi } from '@/services';
import { FIXED_CACHE_KEY_USER } from '@/shared/config/api';
import { Avatar } from '@/widgets';

{
  /* TODO: реализовать анимацию наведения (сделать компонент-обертку для элементов хедера) */
}

export const Header = () => {
  const [_, { data }] = userApi.useUserLoginMutation({
    fixedCacheKey: FIXED_CACHE_KEY_USER,
  });

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <div className={styles.header__content_wrap}>
          <Link to={Routes.ROOT}>
            <Logo />
          </Link>
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
          {data ? (
            <Link to={Routes.PROFILE}>
              <Avatar name={data.FullName} size='small' />
            </Link>
          ) : (
            <div className={styles.header__profile_button}>
              <ActionLink href={Routes.PROFILE}>
                <div className={styles.header__profile_button_wrap}>
                  <img
                    src={AvatarIcon}
                    alt='Аватар'
                    className={styles.header__profile_button__icon}
                  />
                  <p className={styles.header__profile_button__text}>Войти</p>
                </div>
              </ActionLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
