import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useRegisterActions } from 'kbar';
import InstagramIcon from '../../../../public/icons/instagram.svg';
import FacebookIcon from '../../../../public/icons/facebook.svg';
import LinkedinIcon from '../../../../public/icons/linkedin.svg';
import TwitterIcon from '../../../../public/icons/twitter.svg';
import GitHubIcon from '../../../../public/icons/github.svg';

export const useSocialActions = () => {
  const router = useRouter();

  const actions = useMemo(
    () => [
      {
        id: 'instagram',
        name: 'Instagram',
        keywords: 'instagram',
        perform: () => router.push('https://www.instagram.com/frontlive.pl/', '_blank'),
        section: 'Social media',
        icon: <InstagramIcon />,
      },
      {
        id: 'facebook',
        name: 'Facebook',
        keywords: 'facebook',
        perform: () => router.push('https://www.facebook.com/frontlivepl', '_blank'),
        section: 'Social media',
        icon: <FacebookIcon />,
      },
      {
        id: 'linkedin',
        name: 'Linkedin',
        keywords: 'linkedin',
        perform: () => router.push('https://www.linkedin.com/in/olaf-sulich', '_blank'),
        section: 'Social media',
        icon: <LinkedinIcon />,
      },
      {
        id: 'twitter',
        name: 'Twitter',
        keywords: 'twitter',
        perform: () => router.push('https://twitter.com/sulich_olaf', '_blank'),
        section: 'Social media',
        icon: <TwitterIcon />,
      },
      {
        id: 'github',
        name: 'GitHub',
        keywords: 'github',
        perform: () => router.push('https://github.com/olafsulich', '_blank'),
        section: 'Social media',
        icon: <GitHubIcon />,
      },
    ],
    [],
  );

  return useRegisterActions(actions);
};
