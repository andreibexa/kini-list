import { useQuery } from '@tanstack/react-query';
import { getTvShowDetails } from 'services/tvShowService';
import { ShowWithVideos } from 'types/api/tv';

const useTvShowDetails = (id: number) => {
  const showId = Number(id);

  if (!id || showId <= 0) {
    throw new Error('Error! Movie id must be a number.');
  }

  return useQuery<ShowWithVideos, Error>(
    ['movie', String(showId)],
    () => getTvShowDetails(showId),
    {},
  );
};

export default useTvShowDetails;
