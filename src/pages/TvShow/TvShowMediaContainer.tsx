import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import THE_MOVIE_DB_BASE_URL from 'appConstants';
import VideoItem from 'components/video/VideoItem';
import { ShowWithVideos } from 'types/api/tv';
import defaultbBackdropPath from 'assets/img/default-backdrop.jpg';

interface Props {
  show: ShowWithVideos | undefined;
}

export default function TvShowMediaContainer({ show }: Props) {
  if (!show) {
    return null;
  }

  const firstTrailer = show.videos?.results.find(
    (video) => video.type === 'Trailer' || video.type === 'Clip' || video.type === 'Teaser',
  );

  const backdropPath = show.backdrop_path;
  const backdropUrl = backdropPath
    ? `${THE_MOVIE_DB_BASE_URL}w1280/${backdropPath}`
    : defaultbBackdropPath;

  return (
    <Paper
      sx={{
        position: 'relative',
        '& .react-player-wrapper': {
          paddingTop: '56.25%',
        },
        '& .react-player': {
          position: 'absolute',
          top: 0,
          left: 0,
        },
        '.backdrop': {
          width: '100%',
          height: 'auto',
          border: '1.5em solid transparent',
        },
        '.overlay': {
          boxShadow: 'inset 34px 34px 140px 40px #000000',
          position: 'absolute',
          width: '100%',
          height: '100%',
          content: '""',
        },
      }}
    >
      <Box className="react-player-wrapper">
        <VideoItem video={firstTrailer} />
      </Box>
      {!firstTrailer && (
        <>
          <Box className="overlay" />
          <img src={backdropUrl} className="backdrop" alt={show.name} />
        </>
      )}
    </Paper>
  );
}
