import {
  TelegramIcon,
  // FacebookIcon,
  MediumIcon,
  TwitterIcon,
  GithubIcon,
} from '@icons';
import {
  SocialMedia,
  FooterLink,
} from './components';
import { SocialMediaProps } from './components/social_media/types';

/**
 * Social media links config
 */
export const socialMediaLinks:SocialMediaProps[] = [
  {
    component: TelegramIcon,
    className: 'telegram',
    url: 'https://t.me/forbole',
  },
  // {
  //   component: FacebookIcon,
  //   className: 'facebook',
  //   url: '#',
  // },
  {
    component: MediumIcon,
    className: 'medium',
    url: 'https://medium.com/bigdipperlive',
  },
  {
    component: TwitterIcon,
    className: 'twitter',
    url: 'https://twitter.com/bigdipperlive',
  },
  {
    component: GithubIcon,
    className: 'github',
    url: 'https://github.com/forbole/big-dipper-default-interface',
  },
];

/**
 * Helper function to get all social media links in to a component
 */
export const getSocialMediaComponents = () => {
  return socialMediaLinks.map((x) => {
    return (
      <SocialMedia
        url={x.url}
        component={x.component}
        className={x.className}
      />
    );
  });
};

export const footerLinks = [
  {
    key: 'aboutBigDipper',
    url: '/about',
  },
  {
    key: 'faq',
    url: '/faq',
  },
  {
    key: 'termsAndConditions',
    url: '/terms-and-conditions',
  },
  // {
  //   key: 'downloadWallet',
  //   url: '#',
  // },
];

export const getFooterLinkComponents = (t:any) => {
  return footerLinks.map((x:any) => {
    return (
      <FooterLink
        display={t(x.key)}
        url={x.url}
      />
    );
  });
};
