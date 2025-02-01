import styles from './styles.module.css';
import { NavLink } from 'react-router-dom';
import { Routes } from '../../shared/config';

export const NavMenu = () => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        <li>
          <a href='#'>Мой иви</a>
        </li>
        <li>
          <NavLink to={Routes.MOVIES}>Фильмы</NavLink>
        </li>
        <li>
          <a href='#'>Сериалы</a>
        </li>
        <li>
          <a href='#'>Мультфильмы</a>
        </li>
        <li>
          <a href='#'>ТВ</a>
        </li>
        <li>
          <NavLink to={Routes.FAVORITES}>Избранное</NavLink>
        </li>
      </ul>
    </nav>
  );
};
