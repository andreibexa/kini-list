import { Alert } from '@mui/material';
import CenteredContent from 'components/CenteredContent';
import MoviePage from 'pages/Movie/MoviePage';
import { useParams } from 'react-router-dom';

export default function ValidateMovieId() {
  const { title, id } = useParams();

  if (!id || !title) {
    return (
      <CenteredContent>
        <Alert severity="error">Movie not found.</Alert>
      </CenteredContent>
    );
  }

  return <MoviePage movieId={Number(id)} />;
}
