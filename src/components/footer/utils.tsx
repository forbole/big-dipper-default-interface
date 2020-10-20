import {
  TelegramIcon,
  FacebookIcon,
  MediumIcon,
  TwitterIcon,
  GithubIcon,
} from '@icons';
import {
  SocialMedia,
  StoreBadge,
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
    url: '#',
  },
  {
<<<<<<< HEAD
    key: 'faq',
    url: '/faq',
=======
    component: FacebookIcon,
    className: 'facebook',
    url: '#',
>>>>>>> 520d01e084d0f1b1e01ddb056a5890048f1cc0b2
  },
  {
    component: MediumIcon,
    className: 'medium',
    url: '#',
  },
  {
    component: TwitterIcon,
    className: 'twitter',
    url: '#',
  },
  {
    component: GithubIcon,
    className: 'github',
    url: '#',
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

/**
 * Store Badge links config
 */
export const storeBadges = [
  {
    image: 'images/apple-badge.svg',
    url: '#',
    className: 'apple',
    alt: 'app store',
  },
  {
    image: 'images/google-play-badge.svg',
    url: '#',
    className: 'google',
    alt: 'play store',
  },
];

/**
 * Helper function to get all store badge links in to a component
 */
export const getStoreBadgeComponents = () => {
  return storeBadges.map((x) => {
    return (
      <StoreBadge
        url={x.url}
        alt={x.alt}
        className={x.className}
        image={x.image}
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
    url: '#',
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
