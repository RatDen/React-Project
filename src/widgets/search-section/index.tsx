import { VscChromeClose } from 'react-icons/vsc';
import { LuSearch } from 'react-icons/lu';

import styles from './styles.module.css';
import { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useSearchMoviesQuery } from '@/services/movies-api';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { SearchResults } from './search-results';

export function SearchSection() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchParams, setSearchParams] = useSearchParams({ query: '' });
  const searchQuery = searchParams.get('query') ?? '';
  const debouncedQuery = useDebounce(searchQuery);

  const {
    data: movies,
    isLoading,
    isError,
  } = useSearchMoviesQuery(debouncedQuery);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchParams(
      (state) => {
        state.set('query', e.target.value);
        return state;
      },
      { replace: true }
    );
  }

  function handleInputIconClick() {
    if (searchQuery) {
      setSearchParams(
        (state) => {
          state.set('query', '');
          return state;
        },
        { replace: true }
      );
    } else if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <div className={styles.section_wrapper}>
      <div className={styles.section_input}>
        <h1 className={styles.searchInput_title}>Поиск</h1>
        <form className={styles.form}>
          <input
            className={styles.input}
            ref={inputRef}
            type='text'
            placeholder='Фильмы, сериалы, жанры и персоны'
            autoFocus
            value={searchQuery}
            onChange={handleInputChange}
          />
          <div className={styles.input_icon} onClick={handleInputIconClick}>
            {searchQuery ? <VscChromeClose /> : <LuSearch />}
          </div>
        </form>
      </div>
      {isLoading && <p className={styles.loading}>Загрузка...</p>}
      {isError && <p>Ошибка на стороне сервера. Мы уже чиним.</p>}
      {searchQuery && movies && <SearchResults movies={movies} />}
    </div>
  );
}
