import { Alert, AlertTitle } from '@mui/material';

export default function ErrorMessage() {
  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      Whoops, there was an error — please reload the page!
    </Alert>
  );
}
