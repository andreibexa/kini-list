import ReactPlayer from 'react-player';
import { Video } from 'types/api/generic';

interface Props {
  id: Video['key'];
}

export default function YoutubeVideo({ id }: Props) {
  return (
    <ReactPlayer
      width="100%"
      height="100%"
      className="react-player"
      controls
      url={`https://www.youtube.com/watch?v=${id}`}
    />
  );
}
