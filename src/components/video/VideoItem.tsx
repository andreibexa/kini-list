import { Video } from 'types/api/generic';
import VimeoVideo from './type/VimoeVideo';
import YoutubeVideo from './type/YoutubeVideo';

interface Props {
  video: Video | undefined;
}

export default function VideoItem({ video }: Props) {
  if (!video) {
    return null;
  }

  switch (video.site) {
    case 'YouTube':
      return <YoutubeVideo id={video.key} />;
    case 'Vimeo':
      return <VimeoVideo id={video.key} />;
    default:
      throw new Error(`Unhandled video type \r\n: ${JSON.stringify(video.site)}`);
  }
}
