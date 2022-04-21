import { Alert } from '@mui/material';
import CenteredContent from 'components/CenteredContent';
import MoviePage from 'pages/Movie/MoviePage';
import { useParams } from 'react-router-dom';

export default function ValidateMovieId() {
  const params = useParams();
  const title = params.title?.match(/\w+/);
  const movieId = params.id?.match(/\d+/);

  if (!movieId || !title) {
    return (
      <CenteredContent>
        <Alert severity="error">Movie not found.</Alert>
      </CenteredContent>
    );
  }

  return <MoviePage movieId={Number(movieId.input)} />;
}
