import { alpha, Box } from '@mui/material';
import theme from 'layouts/theme';

interface Props {
  children: React.ReactNode;
}

export default function SearchWrapper({ children }: Props) {
  return (
    <Box
      sx={{
        position: 'relative',
        flexGrow: 1,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        gap: 2,
        marginLeft: 0,
        sm: {
          marginLeft: 3,
          width: 'auto',
        },
      }}
    >
      {children}
    </Box>
  );
}
