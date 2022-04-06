import HomeIcon from '@mui/icons-material/Home';
/* import LineStyleIcon from '@mui/icons-material/LineStyle';
import LocalMoviesOutlinedIcon from '@mui/icons-material/LocalMoviesOutlined';
import MovieIcon from '@mui/icons-material/Movie'; */
import React from 'react';
import Home from 'pages/Home/Home';
import { IPageLinks } from '../types/pageLinks';

const pageLinks: IPageLinks[] = [
  {
    component: Home,
    label: 'Home',
    icon: React.createElement('<>', {}, HomeIcon),
    index: true,
    path: '/',
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
