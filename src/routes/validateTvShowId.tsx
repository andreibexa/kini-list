import { Alert } from '@mui/material';
import CenteredContent from 'components/CenteredContent';
import TvShowPage from 'pages/TvShow/TvShowPage';
import { useParams } from 'react-router-dom';

export default function ValidateTvShowId() {
  const { title, id } = useParams();

  if (!id || !title) {
    return (
      <CenteredContent>
        <Alert severity="error">Tv Series not found.</Alert>
      </CenteredContent>
    );
  }

  return <TvShowPage showId={Number(id)} />;
}
