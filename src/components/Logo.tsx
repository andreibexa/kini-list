import Videocam from '@mui/icons-material/Videocam';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Theme } from '@mui/material/styles';

export default function Logo() {
  return (
    <Link
      component={RouterLink}
      to="/"
      color="inherit"
      underline="none"
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h6"
        noWrap
        sx={{
          letterSpacing: 2,
          color: (theme: Theme) => theme.palette.secondary.dark,
        }}
      >
        KINILIST
      </Typography>
      <Videocam
        sx={{
          ml: 2,
          color: (theme: Theme) => theme.palette.secondary.dark,
        }}
      />
    </Link>
  );
}
