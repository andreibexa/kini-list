import { Alert } from '@mui/material';
import CenteredContent from 'components/CenteredContent';
import TvShowPage from 'pages/TvShow/TvShowPage';
import { useParams } from 'react-router-dom';

export default function ValidateTvShowId() {
  const params = useParams();
  const title = params.title?.match(/\w+/);
  const showId = params.id?.match(/\d+/);

  if (!showId || !title) {
    return (
      <CenteredContent>
        <Alert severity="error">Tv Series not found.</Alert>
      </CenteredContent>
    );
  }

  return <TvShowPage showId={Number(showId.input)} />;
}
