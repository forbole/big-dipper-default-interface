import React from 'react';
import { useTranslation } from 'i18n';
import { useTheme } from '@material-ui/core/styles';
import { ValidatorProfile } from 'big-dipper-default-ui';
import { useGetStyles } from './styles';
import { useProfileHook } from './hooks';

const Profile = () => {
  const { t } = useTranslation(['validators']);
  const { profile } = useProfileHook();
  const theme: any = useTheme();
  const { classes } = useGetStyles();
  return (
    <ValidatorProfile
      className={classes.root}
      image={profile.image}
      alt={profile.alt}
      name={profile.name}
      bio={profile.bio}
      desktopWidth={theme?.breakpoints?.values?.desktop}
      keyBase={{
        display: profile.keybase.display,
        verified: profile.keybase.verified,
        url: profile.keybase.url,
      }}
      website={profile.website}
      status={{
        display: t(profile.status.display),
        className: profile.status.className,
      }}
    />
  );
};

export default Profile;
