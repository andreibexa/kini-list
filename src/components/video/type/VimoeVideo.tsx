import ReactPlayer from 'react-player';
import { Video } from 'types/api/generic';

interface Props {
  id: Video['key'];
}

export default function VimeoVideo({ id }: Props) {
  return (
    <ReactPlayer
      width="100%"
      height="100%"
      className="react-player"
      controls
      url={`https://vimeo.com/${id}`}
    />
  );
}
