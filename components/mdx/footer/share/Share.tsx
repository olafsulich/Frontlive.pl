import { memo } from 'react';
import TwitterIcon from '../../../../public/icons/twitter.svg';
import FacebookIcon from '../../../../public/icons/facebook.svg';
import { TwitterShareButton, FacebookShareButton } from 'react-share';
import styles from './share.module.scss';

type ShareProps = {
  title: string;
  url: string;
};

const Share = memo<ShareProps>(({ title, url }) => (
  <div className={styles.share}>
    <TwitterShareButton
      title={title}
      via="olafsulich"
      url={`www.frontlive.pl/blog/${url}`}
      className={styles.link}
    >
      <span className="visually-hidden">Udostępnij na Twitterze</span>
      <TwitterIcon className={styles.icon} />
    </TwitterShareButton>
    <FacebookShareButton quote={title} url={`www.frontlive.pl/blog/${url}`} className={styles.link}>
      <span className="visually-hidden">Udostępnij na Facebooku</span>
      <FacebookIcon className={styles.icon} />
    </FacebookShareButton>
  </div>
));

export default Share;
