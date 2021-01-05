import React from 'react';
import { useRouter } from 'next/router';
import { NavbarItem } from 'big-dipper-internal-ui';
import Link from 'next/link';
import { getLanguageValue } from '@utils';
import { BigDipperNetwork } from '@models';
import {
  HomeIcon,
  BlockIcon,
  ActivityIcon,
  ProposalIcon,
  UserIcon,
} from '@assets';
import { NetworkItem } from './components';

export const getLanguageList = () => {
  const langaugeList = ['en'];
  return langaugeList.map((x) => ({
    key: x,
    value: getLanguageValue(x),
  }));
};

// ===========================
// Navbar
// ===========================
/**
 * Nav links config
 */
export const getNavItems = () => {
  const iconProps = {
    width: 24,
    height: 24,
  };

  return [
    {
      key: 'overview',
      url: '/',
      icon: <HomeIcon {...iconProps} />,
    },
    {
      key: 'validators',
      url: '/validators',
      icon: <UserIcon {...iconProps} />,
    },
    {
      key: 'blocks',
      url: '/blocks',
      icon: <BlockIcon {...iconProps} />,
    },
    {
      key: 'activities',
      url: '/activities',
      icon: <ActivityIcon {...iconProps} />,
    },
    {
      key: 'proposals',
      url: '/proposals',
      icon: <ProposalIcon {...iconProps} />,
    },
  // {
  //   key: 'news',
  //   url: '/news',
  //   icon: AnnouncementOutlined,
  // },
  // {
  //   key: 'analysis',
  //   url: '/analysis',
  //   icon: PieChartOutlined,
  // },
  ];
};

/**
 * Helper function to generate nav components
 */
export const getNavComponents = (t:any) => {
  const router = useRouter();

  const isActive = (item:any) => {
    if (item.url === router?.asPath) {
      return true;
    }
    if (router?.asPath?.includes(item.url) && item.url !== '/') {
      return true;
    }
    return false;
  };

  const navItems = getNavItems();

  return navItems.map((x) => {
    return (
      <Link href={x.url}>
        <a>
          <NavbarItem
            key={x.key}
            text={t(x.key)}
            icon={x.icon}
            active={isActive(x)}
          />
        </a>
      </Link>
    );
  });
};

export const getNetworksComponent = (networks: BigDipperNetwork[]) => {
  return networks.map((x) => {
    return (
      <NetworkItem network={x} />
    );
  });
};
