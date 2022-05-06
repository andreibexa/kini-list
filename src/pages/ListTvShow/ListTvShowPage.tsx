import useTvShowsTop from 'hooks/useTvShowsTop';
import CenteredContent from 'components/CenteredContent';
import LoaderEffect from 'components/LoaderEffect';
import { Alert } from '@mui/material';
import useGenresTvShows from 'hooks/useGenresTvShows';
import { TVListResult } from 'types/api/generic';
import React, { useEffect } from 'react';
import THE_MOVIE_DB_BASE_URL from 'appConstants';
import Hero from 'components/Hero';
import HeroContent from 'pages/ListTvShow/components/HeroContent';
import useTvShowsByGenre from 'hooks/useTvShowsByGenre';
import TvShowList from './components/ListTvShow';

const img = new Image();
function findFirstTvShow(moviesTop: TVListResult[] | undefined) {
  return moviesTop?.find((movie) => !!movie.backdrop_path);
}

export default function ListTvShowPage() {
  const { tvShowsTop, isLoadingTvShowsTop } = useTvShowsTop();
  const { isLoadingTvShowsByGenres } = useTvShowsByGenre();
  const { isLoadingGenresTvShows } = useGenresTvShows();
  const [heroTvShow, setHeroTvShow] = React.useState<TVListResult | undefined>();
  const isLoading = isLoadingTvShowsTop || isLoadingTvShowsByGenres || isLoadingGenresTvShows;

  useEffect(() => {
    const firstTvShow = findFirstTvShow(tvShowsTop);
    if (firstTvShow) {
      img.src = `${THE_MOVIE_DB_BASE_URL}w1280/${
        firstTvShow.backdrop_path || 'assets/img/default-backdrop.jpg'
      }`;

      img.onload = () => {
        setHeroTvShow(firstTvShow);
      };
    }
  }, [tvShowsTop]);

  if (tvShowsTop && tvShowsTop.length === 0) {
    return (
      <CenteredContent>
        <Alert severity="error">
          No TV series found. Try to filter by another country or provider
        </Alert>
      </CenteredContent>
    );
  }

  return (
    <LoaderEffect
      isLoading={isLoading}
      sx={{
        pt: 0,
        px: 0,
      }}
    >
      {heroTvShow && (
        <Hero backgroundUrl={img.src} heroContent={<HeroContent show={heroTvShow} />} />
      )}
      <TvShowList />
    </LoaderEffect>
  );
}
