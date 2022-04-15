import { Box, Typography } from '@mui/material';
import Loader from 'components/Loader';
import SlideContent from 'components/movieThumbnail/MovieThumbnail';
import useSearchMulti from 'hooks/useSearchMulti';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function SearchPage() {
  const params = useParams();
  const search = params?.search || '';
  const { movies, isLoading, refetch } = useSearchMulti(search);
  const headingText = movies?.total_results
    ? `Search results for: ${search}`
    : `Sorry, no movies found for your request: ${search}`;

  useEffect(() => {
    refetch().catch(() => {});
  }, [params, refetch]);

  return (
    <>
      {isLoading && <Loader />}
      <Box
        sx={[
          {
            minHeight: '100vh',
            div: {
              transition: 'opacity 1s ease-in',
              opacity: '1',
            },
          },
          isLoading
            ? {
              background: '#000',
              div: {
                transition: 'opacity 1s ease-out, background-image 1s ease-out',
                opacity: '.1',
              },
            }
            : {},
        ]}
      >
        <Box sx={{ pt: 30, mx: '4vw' }}>
          <Typography variant="h5" sx={{ mb: 6 }}>
            {headingText}
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gap: 2,
              gridRowGap: 8,
              gridTemplateColumns: 'repeat(auto-fit, minmax(222px, 1fr))',
              position: 'relative',
            }}
          >
            {!!movies
              && movies.results.map((movie) => (
                <SlideContent
                  key={movie.id}
                  voteAverage={movie.vote_average}
                  title={movie.title}
                  posterPath={movie.poster_path}
                />
              ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
