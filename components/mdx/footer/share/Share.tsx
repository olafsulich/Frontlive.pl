import { memo } from 'react';
import TwitterIcon from '../../../../public/icons/twitter.svg';
import FacebookIcon from '../../../../public/icons/facebook.svg';
import { TwitterShareButton, FacebookShareButton } from 'react-share';
import styles from './share.module.scss';

type ShareProps = {
  title: string;
  url: string;
};

export const Share = memo<ShareProps>(({ title, url }) => (
  <div className={styles.share}>
    <TwitterShareButton
      title={title}
      via="olafsulich"
      url={`www.frontlive.pl/blog/${url}`}
      className={styles.link}
      aria-label="Udostępnij na Twitterze"
      aria-haspopup="true"
    >
      <TwitterIcon aria-hidden="true" className={styles.icon} />
    </TwitterShareButton>
    <FacebookShareButton
      aria-label="Udostępnij na Facebooku"
      quote={title}
      url={`www.frontlive.pl/blog/${url}`}
      className={styles.link}
      aria-haspopup="true"
    >
      <FacebookIcon aria-hidden="true" className={styles.icon} />
    </FacebookShareButton>
  </div>
));
