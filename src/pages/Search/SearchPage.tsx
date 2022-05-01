import { Box, Container, Typography } from '@mui/material';
import LoaderEffect from 'components/LoaderEffect';
import MediaType from 'components/movieThumbnail/MediaType';
import useSearchMulti from 'hooks/useSearchMulti';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function SearchPage() {
  const params = useParams();
  const search = params?.search || '';
  const { data: movies, isLoading, refetch } = useSearchMulti(search);

  const headingText = movies?.total_results
    ? `Search results for: ${search}`
    : `Sorry, no movies found for your request: ${search}`;

  useEffect(() => {
    refetch().catch(() => {});
  }, [params, refetch]);

  return (
    <LoaderEffect isLoading={isLoading}>
      <Container maxWidth="xl">
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
          {movies?.results.map((movie) => (
            <MediaType movie={movie} key={movie.id} />
          ))}
        </Box>
      </Container>
    </LoaderEffect>
  );
}
