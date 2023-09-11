import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import TvIcon from '@mui/icons-material/Tv';
import MovieIcon from '@mui/icons-material/Movie';
import { lazy, createElement } from 'react';
import { AllRoutes } from 'types/allRoutes';

const HomePage = lazy(() => import('pages/Home/HomePage'));
const ListTvShowPage = lazy(() => import('pages/ListTvShow/ListTvShowPage'));
const ListMoviesPage = lazy(() => import('pages/ListMovie/ListMoviePage'));
const SearchPage = lazy(() => import('pages/Search/SearchPage'));
const ValidateMovieId = lazy(() => import('routes/validateMovieId'));
const ValidateTvShowId = lazy(() => import('routes/validateTvShowId'));

// TODO: De testat fara lazy
const allRoutes: AllRoutes[] = [
  {
    uid: 0,
    element: HomePage,
    label: 'Home',
    icon: createElement(HomeIcon, {}),
    index: true,
    path: '/',
    visible: true,
  },
  {
    uid: 1,
    element: ListMoviesPage,
    label: 'Movies',
    icon: createElement(MovieIcon, {}),
    path: '/movies',
    visible: true,
  },
  {
    uid: 2,
    element: ListTvShowPage,
    label: 'Tv series',
    icon: createElement(TvIcon, {}),
    path: '/tv',
    visible: true,
  },
  {
    uid: 3,
    element: SearchPage,
    label: 'Search',
    icon: createElement(SearchIcon, {}),
    index: false,
    path: '/search/:search',
    visible: false,
  },
  {
    uid: 4,
    element: ValidateMovieId,
    path: '/movie/:title/:id',
  },
  {
    uid: 5,
    element: ValidateTvShowId,
    path: '/tv/:title/:id',
  },
];

export default allRoutes;
