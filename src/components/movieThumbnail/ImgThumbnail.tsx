import THE_MOVIE_DB_BASE_URL from 'appConstants';

interface Props {
  title: string;
  posterPath: string | number | null;
}
export default function ImgThumnbail({ title, posterPath }: Props) {
  if (!posterPath) {
    return null;
  }

  return (
    <img
      sizes="100vw"
      alt={title}
      width={245}
      height={362}
      src={`${THE_MOVIE_DB_BASE_URL}w300/${posterPath}`}
    />
  );
}
