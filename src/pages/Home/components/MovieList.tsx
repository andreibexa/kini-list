import React from "react";
import useMoviesTop from "hooks/useMoviesTop";
import Box from "@mui/material/Box";
import Carousel from "../../../components/carousel/Carousel";

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

function ListMovies() {
    const {moviesTop} = useMoviesTop();
    //   const {movieGenres} = useMovieGenres();
    //  const {genres} = useGenres();
    if (!moviesTop) {
        return null;
    }

    return (
        <>
            <CarouselContainer>
                <Carousel movies={moviesTop} title="Trending Now"/>
            </CarouselContainer>,

            {/*
                genres &&
                movieGenres?.map((movies, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <CarouselContainer key={index}>
                        <Carousel movies={movies.results} title={genres[index].name}/>
                    </CarouselContainer>
                ))
            */}
        </>
    )
}

export default ListMovies;