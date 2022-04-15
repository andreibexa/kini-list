import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Movie';

/* import LineStyleIcon from '@mui/icons-material/LineStyle';
import LocalMoviesOutlinedIcon from '@mui/icons-material/LocalMoviesOutlined';
import MovieIcon from '@mui/icons-material/Movie'; */
import { lazy } from 'react';
import { IPageLinks } from 'types/pageLinks';

const HomePage = lazy(() => import('pages/Home/HomePage'));
const SearchPage = lazy(() => import('pages/Search/SearchPage'));

const pageLinks: IPageLinks[] = [
  {
    element: HomePage,
    label: 'Home',
    icon: HomeIcon,
    index: true,
    path: '/',
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

export default pageLinks;
