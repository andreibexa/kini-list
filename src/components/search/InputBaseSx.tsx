import InputBase, { InputBaseProps } from '@mui/material/InputBase';
import theme from 'layouts/theme';

export default function InputBaseSx({ placeholder, inputProps, onChange }: InputBaseProps) {
  return (
    <InputBase
      placeholder={placeholder}
      onChange={onChange}
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
