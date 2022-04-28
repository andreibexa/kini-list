import THE_MOVIE_DB_BASE_URL from 'appConstants';

interface Props {
  title: string;
  posterPath: string | number | null;
}

export default function ImgCarousel({ title, posterPath }: Props) {
  if (!posterPath) {
    return null;
  }

  return (
    <img
      sizes="100vw"
      alt={title}
      width={245}
      height={362}
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
      data-splide-lazy={`${THE_MOVIE_DB_BASE_URL}w300/${posterPath}`}
      data-splide-lazy-srcset={`${THE_MOVIE_DB_BASE_URL}w300/${posterPath} 1000w`}
    />
  );
}
