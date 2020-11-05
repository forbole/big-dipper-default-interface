import React from 'react';
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
    url: '/',
    icon: PersonOutline,
  },
  {
    key: 'blocks',
    url: '/',
    icon: CheckBoxOutlineBlankOutlined,
  },
  {
    key: 'activities',
    url: '/',
    icon: SyncAltOutlined,
  },
  {
    key: 'proposals',
    url: '/',
    icon: EventNoteOutlined,
  },
  {
    key: 'news',
    url: '/',
    icon: AnnouncementOutlined,
  },
  {
    key: 'analysis',
    url: '/',
    icon: PieChartOutlined,
  },
];

/**
 * Helper function to generate nav components
 */
export const getNavComponents = (t:any) => {
  return navItems.map((x, i) => {
    return (
      <Link href={x.url}>
        <a>
          <NavbarItem active={i === 0} key={x.key} text={t(x.key)} icon={<x.icon />} />
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
