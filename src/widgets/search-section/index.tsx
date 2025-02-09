import { VscChromeClose } from 'react-icons/vsc';
import { LuSearch } from 'react-icons/lu';

import styles from './styles.module.css';
import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Movie, useMovies } from '@/shared/hooks/useMovies';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { SearchResults } from './search-results';

export function SearchSection() {
  const inputRef = useRef<HTMLInputElement>(null);
  //const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({ query: '' });
  //const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  const debouncedQuery = useDebounce(searchQuery);

  const { movies, error, loading } = useMovies();
  const [foundMovies, setFoundMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const foundMovies: Movie[] = movies.filter((movie) =>
      movie.title.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
    console.log('movies', movies);
    console.log('foundMovies', foundMovies);
    console.log('debouncedQuery', debouncedQuery);
    setFoundMovies(foundMovies);
  }, [debouncedQuery, movies]);

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
      {loading && <p className={styles.loading}>Загрузка...</p>}
      <SearchResults movies={foundMovies} />
    </div>
  );
}
