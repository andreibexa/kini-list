import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import useInput from 'hooks/useInput';
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import theme from 'layouts/theme';
import SearchIconWrapper from './SearchIconWrapper';
import SearchWrapper from './SearchWrapper';

export default function SearchBar() {
  const searchInput = useInput('');
  const navigate = useNavigate();
  const timeoutInput = React.useRef<NodeJS.Timeout>();
  const location = useLocation();

  useEffect(() => {
    const pattern = /search/;
    if (!pattern.test(location.pathname)) {
      searchInput.onReset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const inputValue = event.target.value;
    searchInput.onChange(event);

    if (timeoutInput.current) {
      clearTimeout(timeoutInput.current);
    }

    if (inputValue.length === 0) {
      navigate('/');
      return;
    }

    timeoutInput.current = setTimeout(() => {
      navigate(`search/${inputValue}`);
    }, 750);
  };

  return (
    <SearchWrapper>
      <SearchIconWrapper>
        <SearchIcon sx={{ color: '#D3D3D3' }} />
      </SearchIconWrapper>
      <InputBase
        placeholder="Search for movies or tv series"
        inputProps={{ 'aria-label': 'search' }}
        value={searchInput.value}
        onChange={(event) => handleChange(event)}
        sx={{
          color: 'inherit',
          height: theme.spacing(10),
          '& .MuiInputBase-input': {
            paddingLeft: 40,
            width: '100%',
            fontSize: 18,
            fontWeight: 'light',
            md: {
              width: '20ch',
            },
          },
        }}
      />
    </SearchWrapper>
  );
}
