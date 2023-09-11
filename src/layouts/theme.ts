import { darkScrollbar } from '@mui/material';
import { red } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'dark',
    common: {
      black: '#000',
      white: '#fff',
    },
    background: {
      paper: '#000',
      default: '#121212',
    },
    primary: {
      main: '#D3D3D3',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    secondary: {
      main: '#D3D3D3',
      contrastText: 'rgba(0, 0, 0, 0.87)',
      light: '#303030',
      dark: red[900],
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
    },
  },
  typography: {
    fontFamily: '"Oswald", "Helvetica", "Arial", "sans-serif"',
    body1: { fontWeight: 300 },
    body2: { fontWeight: 300 },
    button: {
      textTransform: 'none',
      '&:hover': {
        background: '#ffffff',
      },
    },
  },
  shape: {
    borderRadius: 2,
  },
  spacing: (factor: number) => `${0.25 * factor}rem`,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: '100%',
        },
        body: [
          darkScrollbar(),
          {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          },
        ],
        '#root': {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        },
        main: {
          flexGrow: 1,
        },
        '#outlet': {
          height: '100%',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#d3d3d3',
          '&:hover': {
            color: '#ffffff',
          },
          underline: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#d3d3d3',
          '&:hover': {
            color: '#ffffff',
          },
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          color: '#d3d3d3',
          '&:hover': {
            color: '#ffffff',
          },
        },
      },
    },
    MuiRating: {
      styleOverrides: {
        root: {
          verticalAlign: 'sub',
        },
        sizeLarge: {},
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: '#ffffff',
          minWidth: '2.5em',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          borderRadius: 'none',
        },
      },
    },
    MuiAvatarGroup: {
      styleOverrides: {
        avatar: {
          border: 'none',
          marginLeft: '2px',
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
