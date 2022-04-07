import {Alert} from '@mui/material';
import Box from '@mui/material/Box';
import MOVIEDB_BASE_URL from 'appConstants';
import useMovieTrendings from 'hooks/useMovieTrendings';
import CenteredContent from 'components/CenteredContent';
import {head} from 'lodash';
import React, {useEffect} from 'react';
import Hero from './components/hero/Hero';
import Carousel from "../../components/carousel/Carousel";
import useMovieGenres from "../../hooks/useMovieGenres";
import useGenres from "../../hooks/useGenres";

type PropsCarouselContainer = { children: React.ReactNode }

function CarouselContainer({children}: PropsCarouselContainer) {
    return (
        <Box
            sx={{
                mb: 4,
                position: 'relative',
                'span.MuiBadge-root': {
                    border: '2px solid transparent',
                    height: '100%',
                },
                '.is-active': {
                    border: 'unset'
                },
                '.is-active>span': {
                    border: '2px solid #ffffff'
                },
                'img': {
                    border: '5px solid #000000',
                    backgroundColor: '#000000',
                },
                '.is-active img': {
                    border: '5px solid #000000'
                },
                '.splide__arrow': {
                    width: '3.2em',
                    height: '3.2em',
                    background: 'transparent'
                },
                '.splide__arrow--next': {
                    right: '.5em',
                },
                '.splide__arrow--prev': {
                    left: '.5em',
                },
                '.splide__arrow svg': {
                    width: 'auto',
                    height: 'auto'
                }
            }}
        >
            {children}
        </Box>
    );
}

function Home() {
    const {movieTrendings, isSuccessMovieTrendings} = useMovieTrendings();
    const {movieGenres} = useMovieGenres();
    const {genres} = useGenres();
    const [isFetching, setIsFetching] = React.useState<boolean>(true);

    useEffect(() => {
        if (isSuccessMovieTrendings) {
            setTimeout(() => setIsFetching(false), 750);
        }

    }, [isSuccessMovieTrendings]);

    if (!movieTrendings) {
        return null;
    }

    if (movieTrendings && movieTrendings.length === 0) {
        return (
            <CenteredContent>
                <Alert severity="error">No movies found. Try to filter by another country or provider</Alert>
            </CenteredContent>
        )
    }

    const firstTrendingMovie = head(movieTrendings);
    if (firstTrendingMovie && firstTrendingMovie.backdrop_path) {
        const img = new Image();
        img.src = `${MOVIEDB_BASE_URL}w1280/${firstTrendingMovie.backdrop_path}`;
    }

    return (
        <Box
            sx={[
                {
                    div: {
                        transition: 'all .75s ease-in-out',
                    },
                },
                isFetching
                    ? {
                        backgroundColor: '#000',
                        div: {
                            transition: 'all .75s linear',
                            opacity: '0.1',
                        },
                    }
                    : {},
            ]}>
            <Hero movie={firstTrendingMovie}/>
            <CarouselContainer>
                <Carousel movies={movieTrendings} title="Trending Now"/>
            </CarouselContainer>
            {
                movieGenres && genres &&
                movieGenres?.map((movies, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <CarouselContainer key={index}>
                        <Carousel movies={movies.results} title={genres[index].name}/>
                    </CarouselContainer>
                ))
            }
        </Box>
    );
}

export default Home;
