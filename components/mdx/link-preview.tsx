import * as Tooltip from '@radix-ui/react-tooltip';
import styles from './link-preview.module.scss';
import * as HoverCard from '@radix-ui/react-hover-card';

type LinkPreviewProps = {
  href: string;
  preview: string;
  name: string;
};

export const LinkPreview = ({ href, preview, name }: LinkPreviewProps) => (
  <HoverCard.Root openDelay={0} closeDelay={0}>
    <HoverCard.Trigger asChild>
      <a href={href} className={styles.link}>
        {name}
      </a>
    </HoverCard.Trigger>
    <HoverCard.Content
      side="top"
      sideOffset={6}
      className={styles.preview}
    >
      <img src={preview} alt="" className={styles.image} />
    </HoverCard.Content>
  </HoverCard.Root>
);
