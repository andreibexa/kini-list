import { alpha } from '@mui/material/styles';
import InputBase, { InputBaseProps } from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';
import React from 'react';
import theme from 'layouts/theme';

interface Props {
  children: React.ReactNode;
}

function Search({ children }: Props) {
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
      }}>
      {children}
    </Box>
  );
}

function SearchIconWrapper({ children }: Props) {
  return (
    <Box
      sx={{
        px: 2,
        py: 0,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {children}
    </Box>
  );
}

function InputBaseSx({ placeholder, inputProps }: InputBaseProps) {
  return (
    <InputBase
      placeholder={placeholder}
      inputProps={inputProps}
      sx={{
        color: 'inherit',
        height: theme.spacing(12),
        '& .MuiInputBase-input': {
          paddingLeft: '3rem',
          width: '100%',
          md: {
            width: '20ch',
          },
        },
      }}
    />
  );
}

export default function SearchBar() {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <InputBaseSx placeholder="Movie, tv show, actor" inputProps={{ 'aria-label': 'search' }} />
    </Search>
  );
}
