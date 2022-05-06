import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Movie';
import { lazy } from 'react';
import { AllRoutes } from 'types/allRoutes';
/* import LineStyleIcon from '@mui/icons-material/LineStyle';
import LocalMoviesOutlinedIcon from '@mui/icons-material/LocalMoviesOutlined';
import MovieIcon from '@mui/icons-material/Movie'; */

const HomePage = lazy(() => import('pages/Home/HomePage'));
const ListTvShowPage = lazy(() => import('pages/ListTvShow/ListTvShowPage'));
const SearchPage = lazy(() => import('pages/Search/SearchPage'));
const ValidateMovieId = lazy(() => import('routes/validateMovieId'));
const ValidateTvShowId = lazy(() => import('routes/validateTvShowId'));

const allRoutes: AllRoutes[] = [
  {
    element: HomePage,
    label: 'Home',
    icon: HomeIcon,
    index: true,
    path: '/',
    visible: true,
  },
  {
    element: ListTvShowPage,
    label: 'Tv series',
    icon: HomeIcon,
    path: '/tv-series',
    visible: true,
  },
  {
    element: SearchPage,
    label: 'Search',
    icon: SearchIcon,
    index: false,
    path: '/search/:search',
    visible: false,
  },
  {
    element: ValidateMovieId,
    label: 'Movie',
    path: '/movie/:title-:id',
  },
  {
    element: ValidateTvShowId,
    label: 'TV Series',
    path: '/tv-series/:title-:id',
  },
  /* {
    label: 'Movies',
    component: React.createElement('<>', {}, Home()),
    index: false,
    path: '/',
    icon: React.createElement('<>', {}, MovieIcon),
  },
  {
    label: 'Series',
    component: React.createElement('<>', {}, Home()),
    index: false,
    path: '/',
    icon: React.createElement('<>', {}, LocalMoviesOutlinedIcon),
  },
  {
    label: 'More ...',
    component: React.createElement('<>', {}, Home()),
    index: false,
    path: '/',
    icon: React.createElement('<>', {}, LineStyleIcon),
  }, */
];

export default allRoutes;
