import LoaderEffect from 'components/LoaderEffect';
import useMovieDetails from 'hooks/useMovieDetails';
import { useNavigate } from 'react-router-dom';
import MovieContent from './MovieContent';

interface Props {
  movieId: number;
}
export default function MoviePage({ movieId }: Props) {
  const navigate = useNavigate();
  const { data: movie, isLoading, isError } = useMovieDetails(movieId);

  if (isError) {
    navigate('/404');
    return null;
  }

  return (
    <LoaderEffect isLoading={isLoading}>{movie && <MovieContent movie={movie} />}</LoaderEffect>
  );
}
