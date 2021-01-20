import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { ValidatorProfile } from 'big-dipper-default-ui';
import { useGetStyles } from './styles';
import { useProfileHook } from './hooks';

const Profile = () => {
  const { profile } = useProfileHook();
  const theme: any = useTheme();
  const { classes } = useGetStyles();
  return (
    <ValidatorProfile
      className={classes.root}
      imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
      alt="Forbole Icon"
      name="Forbole"
      bio="Lorem **ipsum** dolor sit amet, consectetur adipiscing elit. Vivamus dignissim nibh eu ex ultrices, eget vehicula arcu auctor. Ut sed sem molestie eros tempus congue at eu lorem."
      desktopWidth={theme?.breakpoints?.values?.desktop}
      keyBase={{
        display: '12345678910',
        verified: true,
        url: 'https://keybase.io',
      }}
      website="https://www.forbole.com/"
      status={{
        display: 'Active',
        className: 'active',
      }}
    />
  );
};

export default Profile;
