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
    url: 'https://t.me/desmosnetwork',
  },
  // {
  //   component: FacebookIcon,
  //   className: 'facebook',
  //   url: '#',
  // },
  {
    component: MediumIcon,
    className: 'medium',
    url: 'https://medium.com/desmosnetwork',
  },
  {
    component: TwitterIcon,
    className: 'twitter',
    url: 'https://twitter.com/desmosnetwork',
  },
  {
    component: GithubIcon,
    className: 'github',
    url: 'https://github.com/desmos-labs',
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
    url: '#',
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
