import { Routes } from '@/shared/config';
import { Link } from 'react-router-dom';
import { SearchIcon } from '@/app/assets/images';
import styles from './styles.module.css';

export function SearchButton() {
  return (
    <Link to={Routes.SEARCH} className={styles.search_btn}>
      <SearchIcon />
      <span>Поиск</span>
    </Link>
  );
}
