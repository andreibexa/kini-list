import Link from '@mui/material/Link';
import { SplideSlide } from '@splidejs/react-splide';
import ThumbnailWrapper from 'components/carousel/movieThumbnail/ThumbnailWrapper';
import slug from 'helpers/url';
import { Link as RouterLink } from 'react-router-dom';
import { MovieListResult, TVListResult } from 'types/api/generic';
import ImgCarousel from './movieThumbnail/ImgCarousel';

interface Props {
  mediaList: (MovieListResult | TVListResult)[] | undefined;
}

function SplideSlideMedia({ mediaList = [] }: Props) {
  const items = mediaList.map((item) => {
    let title: string;
    const imgPath: string | null | number = item.poster_path;
    const voteAverage: number = (item.vote_average, 1);
    let mediaType: string;

    if ('title' in item) {
      title = item.title;
      mediaType = 'movie';
    } else if ('name' in item) {
      title = item.name;
      mediaType = 'tv';
    } else {
      return null;
    }

    return (
      <SplideSlide key={item.id}>
        <Link component={RouterLink} to={`/${mediaType}/${slug(title)}/${item.id}`} title={title}>
          <ThumbnailWrapper
            voteAverage={voteAverage}
            imgComponent={<ImgCarousel title={title} posterPath={imgPath} />}
          />
        </Link>
      </SplideSlide>
    );
  });

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{items}</>;
}

export default SplideSlideMedia;
