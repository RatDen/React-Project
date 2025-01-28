import styles from './styles.module.css';

const NavMenu = () => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        <li>
          <a href='#'>Мой иви</a>
        </li>
        <li>
          <a href='#'>Фильмы</a>
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
      </ul>
    </nav>
  );
};

export default NavMenu;
