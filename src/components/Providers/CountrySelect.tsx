import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Country } from 'types/api/configuration';
import { useStateValue } from 'state/state';
import useCountries from 'hooks/useCountries';
import { setCountry } from 'state/reducer';

export default function CountrySelect() {
  const [{country}, dispatch] = useStateValue()
  const countries = useCountries();

  const handleChange = (selected: Country | null) => {
    if (selected) {
      dispatch(setCountry(selected));
    }
  }

  if (!countries) {
    return null;
  }

  return (
    <Autocomplete
      id="region-select"
      sx={{ width: '100%' }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => `${option.english_name} (${option.iso_3166_1})`}
      value={country || null}
      onChange={(event: unknown, selected: Country | null) => {
        handleChange(selected);
      }}
      isOptionEqualToValue={(option, val) => option.iso_3166_1 === val.iso_3166_1}
      renderOption={(props, option) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.iso_3166_1.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.iso_3166_1.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.english_name} ({option.iso_3166_1})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...params}
          label="Select your country"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}
