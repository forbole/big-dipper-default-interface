import React from 'react';
import { useRouter } from 'next/router';
import { NavbarItem } from 'big-dipper-internal-ui';
import Link from 'next/link';
import {
  HomeOutlined,
  PersonOutline,
  CheckBoxOutlineBlankOutlined,
  SyncAltOutlined,
  EventNoteOutlined,
  // AnnouncementOutlined,
  // PieChartOutlined,
} from '@material-ui/icons';
import { getLanguageValue } from '@utils';
import { BigDipperNetwork } from '@models';
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
export const navItems = [
  {
    key: 'overview',
    url: '/',
    icon: HomeOutlined,
  },
  {
    key: 'validators',
    url: '/validators',
    icon: PersonOutline,
  },
  {
    key: 'blocks',
    url: '/blocks',
    icon: CheckBoxOutlineBlankOutlined,
  },
  {
    key: 'activities',
    url: '/activities',
    icon: SyncAltOutlined,
  },
  {
    key: 'proposals',
    url: '/proposals',
    icon: EventNoteOutlined,
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

  return navItems.map((x) => {
    return (
      <Link href={x.url}>
        <a>
          <NavbarItem
            key={x.key}
            text={t(x.key)}
            icon={<x.icon />}
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
