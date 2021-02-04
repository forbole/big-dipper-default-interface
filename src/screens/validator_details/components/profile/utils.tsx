import { Avatar } from '@components';
import {
  ValidatorProfile,
  KeybaseProfile,
} from '@models';

export const formatProfileData = (
  address:string,
  profile:ValidatorProfile,
  keybase?:KeybaseProfile,
) => {
  const getStatus = (status: number, jailed: boolean) => {
    if (status === 3 && !jailed) {
      return ({
        display: 'active',
        className: 'active',
      });
    }

    if (status === 3 && jailed) {
      return ({
        display: 'jailed',
        className: 'jailed',
      });
    }

    return ({
      display: 'inactive',
      className: 'inactive',
    });
  };

  return {
    image: keybase?.imageUrl ?? <Avatar address={address} diameter={56} />,
    alt: `${profile.moniker} icon`,
    name: profile.moniker,
    bio: profile.details,
    website: profile.website,
    keybase: {
      display: profile?.identity,
      verified: !!keybase,
      url: keybase ? `https://keybase.io/${keybase.username}` : null,
    },
    status: getStatus(profile.validatorStatus.status, profile.validatorStatus.jailed),
  };
};
