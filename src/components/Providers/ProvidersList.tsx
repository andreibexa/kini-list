import { Alert, CircularProgress, ImageList, Typography } from '@mui/material';
import CenteredContent from 'components/CenteredContent';
import useProviders from 'hooks/useProviders';
import ProviderSingle from './ProviderSingle';

function ProvidersList() {
  const { providers, isSuccess } = useProviders();
  const hasEntries = providers ? providers.length : false;

  if(isSuccess && !hasEntries) {
    return(
      <Alert severity="error" sx={{mt:2}}>No streaming services found for this country !</Alert>
    )
  }

  if(!providers){
    return  (
      <CenteredContent>
          <CircularProgress sx={{mt:2, mb:2}} />
      </CenteredContent>
    )
  }

  return (
    <>
      <Typography
          component="p"
          variant="body1"
          align="left"
          gutterBottom
          sx={{
            width: '100%',
            pl: 2,
            pt: 2.5,
          }}>
          Streaming services
      </Typography>
      <ImageList cols={3} gap={10}>
      {
      providers.map((provider) => (
        <ProviderSingle provider={provider} key={provider.provider_id} />
      ))
      }
    </ImageList>
    </>
  );
}

export default ProvidersList;
