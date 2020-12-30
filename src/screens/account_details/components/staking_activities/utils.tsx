import React from 'react';
import { AvatarDisplay } from 'big-dipper-default-ui';

const Address = () => {
  return (
    <AvatarDisplay
      imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
      alt="avatar image"
      title="Forbole"
    />
  );
};

/**
 * Helper function to get delegation and undelegation labels
 * @param t i18n translator
 */
export const getLabels = (t: any) => ({
  address: t('address'),
  amount: t('amount'),
});

/**
 * Helper function to get deskop labels
 * @param t i18n translator
 */
export const getLabelsRedelegationsDesktop = (t: any) => ({
  address: t('address'),
  from: t('from'),
  redelegateTo: t('redelegateTo'),
  amount: t('amount'),
});

export const singleMobileDummy = {
  address: <Address />,
  amount: '1,000 ATOM',
};
// mobile only shows 7
export const dummyMobileData: any[] = [
  singleMobileDummy,
  singleMobileDummy,
  singleMobileDummy,
  singleMobileDummy,
  singleMobileDummy,
  singleMobileDummy,
  singleMobileDummy,
  singleMobileDummy,
  singleMobileDummy,
  singleMobileDummy,
];
