import { Stack } from '@mui/material';

type Props = {
  children: JSX.Element;
};

export default function CenteredContent({ children }: Props) {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ height: '100%' }}>
      {children}
    </Stack>
  );
}
