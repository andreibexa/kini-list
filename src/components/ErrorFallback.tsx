import { Alert, Paper, Stack } from '@mui/material';

type ErrorFallbackProps = {
  error: Error;
};

export default function ErrorFallback({ error }: ErrorFallbackProps) {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ height: '100%' }}
    >
      <Paper>
        <Alert severity="error">
          <p>Something went wrong:</p>
          <pre>{error.message}</pre>
        </Alert>
      </Paper>
    </Stack>
  );
}
