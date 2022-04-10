import Box from '@mui/material/Box';
import MOVIEDB_BASE_URL from 'appConstants';
import {MovieListResult} from 'types/api/generic';
import HeroContent from './HeroContent';


export default function Hero({movie}: { movie: MovieListResult }) {
    
    if (!movie) {
        return null;
    }

    if (!movie.backdrop_path) {
        throw Error('Movie background not found in Hero component');
    }

    const backgroundUrl = `${MOVIEDB_BASE_URL}w1280/${movie.backdrop_path}`;

    const sxHeroUnit = {
        background: `url(${backgroundUrl}) no-repeat`,
        webkitTransition: 'background-image 1s ease-in-out',
        transition: 'background-image 1s ease-in-out',
        height: '100vh',
        mb: '-25vh',
        minHeight: '710px',
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
        pl: '4vw',
        pr: '4vw',
        '&:after': {
            boxShadow: 'inset 34px 34px 140px 40px #000000',
            content: '""',
            display: 'block',
            height: '100%',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
        },
    };

    return (
        <Box sx={sxHeroUnit}>
            <HeroContent movie={movie}/>
        </Box>
    );
}
