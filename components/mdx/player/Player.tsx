import { memo } from 'react';
import ReactPlayer from 'react-player';
import styles from './player.module.scss';

type PlayerProps = {
  url: string;
  label?: string;
};

const Player = memo(({ url, label }: PlayerProps) => {
  return (
    <div className={styles.player}>
      <ReactPlayer
        url={url}
        width="100%"
        controls
        config={{
          file: {
            attributes: {
              'aria-label': label,
            },
          },
        }}
      />
    </div>
  );
});

export default Player;
