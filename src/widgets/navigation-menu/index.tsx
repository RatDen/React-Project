import styles from './styles.module.css';
import { NavLink } from 'react-router-dom';
import { Routes } from '@/shared/config';

export const NavMenu = () => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        <li>
          <NavLink to={Routes.ROOT}>Мой иви</NavLink>
        </li>
        <li>
          <NavLink to={Routes.MOVIES}>Фильмы</NavLink>
        </li>
        <li>
          <NavLink to={Routes.SERIES}>Сериалы</NavLink>
        </li>
        <li>
          <NavLink to={Routes.ANIMATION}>Мультфильмы</NavLink>
        </li>
        <li>
          <NavLink to={Routes.TVPLUS}>ТВ</NavLink>
        </li>
        <li>
          <NavLink to={Routes.FAVORITES}>Избранное</NavLink>
        </li>
      </ul>
    </nav>
  );
};
