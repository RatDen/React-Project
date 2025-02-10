import { useParams } from 'react-router-dom';

import CardInfo from '@/components/CardInfo';

export function Movie() {
  const params = useParams<{ id: string }>();

  if (!params.id) {
    return <div>Movie ID is missing</div>;
  }

  return <CardInfo movieId={Number(params.id)} />;
}
