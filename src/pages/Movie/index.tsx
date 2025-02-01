import { useParams } from 'react-router-dom';

import { MovieDetails } from '@/components/MovieDetails';

export function Movie() {
  const params = useParams<{ id: string }>();

  if (!params.id) {
    return <div>Movie ID is missing</div>;
  }

  return <MovieDetails movieId={params.id} />;
}
