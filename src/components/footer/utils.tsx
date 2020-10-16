import {
  TelegramIcon,
  FacebookIcon,
  MediumIcon,
  TwitterIcon,
  GithubIcon,
} from '@icons';

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

export const socialMediaLinks = [
  {
    component: TelegramIcon,
    url: '#',
  },
  {
    component: FacebookIcon,
    url: '#',
  },
  {
    component: MediumIcon,
    url: '#',
  },
  {
    component: TwitterIcon,
    url: '#',
  },
  {
    component: GithubIcon,
    url: '#',
  },
];

export const getStoreBadge = (classes) => {
  return (
    [
      {
        image: 'images/apple-badge.svg',
        url: '#',
        className: classes.appleBadge,
        alt: 'apple store',
      },
      {
        image: 'images/google-play-badge.svg',
        url: '#',
        className: classes.googleBadge,
        alt: 'google store',
      },
    ]
  );
};
