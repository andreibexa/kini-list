import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import THE_MOVIE_DB_BASE_URL from 'appConstants';
import VideoItem from 'components/video/VideoItem';
import { MovieWithVideos } from 'types/api/movies';
import defaultbBackdropPath from 'assets/img/default-backdrop.jpg';

interface Props {
  movie: MovieWithVideos | undefined;
}

export default function MovieMediaContainer({ movie }: Props) {
  if (!movie) {
    return null;
  }

  const firstTrailer = movie.videos?.results.find(
    (video) => video.type === 'Trailer' || video.type === 'Clip' || video.type === 'Teaser',
  );

  const backdropPath = movie.backdrop_path;
  const backdropUrl = backdropPath
    ? `${THE_MOVIE_DB_BASE_URL}w1280/${backdropPath}`
    : defaultbBackdropPath;

  return (
    <Paper
      sx={{
        position: 'relative',
        m: 6,
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
      {firstTrailer ? (
        <Paper className="react-player-wrapper" sx={{ background: '#000' }}>
          <VideoItem video={firstTrailer} />
        </Paper>
      ) : (
        <>
          <Box className="overlay" />
          <img src={backdropUrl} className="backdrop" alt={movie.original_title} />
        </>
      )}
    </Paper>
  );
}
