import SearchIcon from '@mui/icons-material/Search';
import useInput from 'hooks/useInput';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputBaseSx from './InputBaseSx';
import SearchIconWrapper from './SearchIconWrapper';
import SearchWrapper from './SearchWrapper';

export default function SearchBar() {
  const searchInput = useInput('');
  const navigate = useNavigate();
  const timeoutInput = React.useRef<NodeJS.Timeout>();

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (inputValue.length === 0) {
      navigate('/home');
      return;
    }

    if (timeoutInput.current) {
      clearTimeout(timeoutInput.current);
    }

    timeoutInput.current = setTimeout(() => {
      navigate(`search/${inputValue}`);
    }, 750);
  };

  return (
    <SearchWrapper>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <InputBaseSx
        placeholder="Movie, tv show, actor"
        inputProps={{ 'aria-label': 'search' }}
        value={searchInput.value}
        onChange={(event) => handleChange(event)}
      />
    </SearchWrapper>
  );
}
