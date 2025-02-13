import { useParams } from 'react-router-dom';
import { useGetSingleMovieQuery } from '@/services';
import { CardInfo } from '@/shared/ui';
import { invariant } from '@/shared/utils/helperFunctions';
import { NotFoundInfo } from '@/widgets';

export function Movie() {
  const { id } = useParams<{ id: string }>();

  try {
    invariant(id);
  } catch (error) {
    console.log(error);
    return <NotFoundInfo />;
  }

  const { data: movie, isLoading, isError } = useGetSingleMovieQuery(id);

  if (isLoading) {
    return <p>Загрузка...</p>;
  }

  if (isError) {
    return (
      <>
        Случилась ошибка при выполнении запроса.
        <br />
        Проверьте подключение к интернету или зайдите позже.
      </>
    );
  } else {
    return movie ? <div>{<CardInfo movie={movie} id={movie.id} />}</div> : <NotFoundInfo />;
  }
}
