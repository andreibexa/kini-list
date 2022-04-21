import LoaderEffect from 'components/LoaderEffect';
import useTvShowDetails from 'hooks/useTvShowDetails';
import { useNavigate } from 'react-router-dom';
import TvShowContent from './TvShowContent';

interface Props {
  showId: number;
}
export default function TvShowPage({ showId }: Props) {
  const navigate = useNavigate();
  const { data: show, isLoading, isError } = useTvShowDetails(showId);

  if (isError) {
    navigate('/404');
    return null;
  }

  return (
    <LoaderEffect isLoading={isLoading}>
      <TvShowContent show={show} />
    </LoaderEffect>
  );
}
