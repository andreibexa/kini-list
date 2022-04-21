import { MovieListResult } from 'types/api/generic';
import CarouselSplide from './CarouselSplide';
import CarouselTitle from './CarouselTitle';
import CarouselWrapper from './CarouselWrapper';

type Props = {
  movies: MovieListResult[];
  title: string;
};

export default function Carousel({ movies, title }: Props) {
  if (!movies || movies.length === 0) {
    return null;
  }

  return (
    <CarouselWrapper>
      <CarouselTitle title={title} />
      <CarouselSplide movies={movies} />
    </CarouselWrapper>
  );
}
