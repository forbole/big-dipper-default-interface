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
  AnnouncementOutlined,
  PieChartOutlined,
} from '@material-ui/icons';
import { getLanguageValue } from '@utils';

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
  {
    key: 'news',
    url: '/news',
    icon: AnnouncementOutlined,
  },
  {
    key: 'analysis',
    url: '/analysis',
    icon: PieChartOutlined,
  },
];

/**
 * Helper function to generate nav components
 */
export const getNavComponents = (t:any) => {
  const router = useRouter();

  const isActive = (item:any) => {
    if (item.url === router.asPath) {
      return true;
    } if (router.asPath.includes(item.url)) {
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

// ===========================
// Dummy data
// ===========================
export const networkDummy = {
  name: 'Cosmos Hub',
  logo: 'https://gist.githubusercontent.com/kwunyeung/8be4598c77c61e497dfc7220a678b3ee/raw/8178b6bcce1d1563bac10f8a150c713724a742f1/cosmoshub.svg?sanitize=true',
  links: [
    {
      name: 'Mainnet',
      chain_id: 'cosmoshub-3',
      url: 'https://cosmos.bigdipper.live',
    },
    {
      name: 'Testnet',
      chain_id: 'stargate-3a',
      url: 'https://stargate.bigdipper.live',
    },
    {
      name: 'Testnet',
      chain_id: 'gaia-13007',
      url: 'https://gaia.bigdipper.live',
    },
    {
      name: 'Retired',
      chain_id: 'cosmoshub-2',
      url: 'https://cosmoshub-2.bigdipper.live',
    },
    {
      name: 'Retired',
      chain_id: 'cosmoshub-1',
      url: 'https://cosmoshub-1.bigdipper.live',
    },
  ],
};
