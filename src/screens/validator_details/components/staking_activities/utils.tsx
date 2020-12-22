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
 * Helper function to get mobile labels
 * @param t i18n translator
 */
export const getLabelsMobile = (t: any) => ({
  address: t('address'),
});

/**
 * Helper function to get deskop labels
 * @param t i18n translator
 */
export const getLabelsDesktop = (t: any) => ({
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

// mobile only shows 7
export const dummyValidatorStaking: any[] = [
  {
    address: <Address />,
    amount: '1,000 ATOM',
  },
  {
    address: <Address />,
    amount: '1,000 ATOM',
  },
  {
    address: <Address />,
    amount: '1,000 ATOM',
  },
  {
    address: <Address />,
    amount: '1,000 ATOM',
  },
  {
    address: <Address />,
    amount: '1,000 ATOM',
  },
  {
    address: <Address />,
    amount: '1,000 ATOM',
  },
  {
    address: <Address />,
    amount: '1,000 ATOM',
  },

];

export const dummyValidatorRedelegations: any[] = [
  {
    address: <Address />,
    from: <Address />,
    redelegateTo: <Address />,
    amount: '1,000 ATOM',
  },
  {
    address: <Address />,
    from: <Address />,
    redelegateTo: <Address />,
    amount: '1,000 ATOM',
  },
  {
    address: <Address />,
    from: <Address />,
    redelegateTo: <Address />,
    amount: '1,000 ATOM',
  },
  {
    address: <Address />,
    from: <Address />,
    redelegateTo: <Address />,
    amount: '1,000 ATOM',
  },
  {
    address: <Address />,
    from: <Address />,
    redelegateTo: <Address />,
    amount: '1,000 ATOM',
  },
  {
    address: <Address />,
    from: <Address />,
    redelegateTo: <Address />,
    amount: '1,000 ATOM',
  },
  {
    address: <Address />,
    from: <Address />,
    redelegateTo: <Address />,
    amount: '1,000 ATOM',
  },
  {
    address: <Address />,
    from: <Address />,
    redelegateTo: <Address />,
    amount: '1,000 ATOM',
  },
  {
    address: <Address />,
    from: <Address />,
    redelegateTo: <Address />,
    amount: '1,000 ATOM',
  },
  {
    address: <Address />,
    from: <Address />,
    redelegateTo: <Address />,
    amount: '1,000 ATOM',
  },
  {
    address: <Address />,
    from: <Address />,
    redelegateTo: <Address />,
    amount: '1,000 ATOM',
  },
  {
    address: <Address />,
    from: <Address />,
    redelegateTo: <Address />,
    amount: '1,000 ATOM',
  },
  {
    address: <Address />,
    from: <Address />,
    redelegateTo: <Address />,
    amount: '1,000 ATOM',
  },

];

export const dummyValidatorRedelegationsMobile: any[] = [
  {
    address: <Address />,
    from: <a href="/">Forbole</a>,
    redelegateTo: <a href="/">Forbole</a>,
    amount: '1,000 ATOM',
  },
  {
    address: <Address />,
    from: <a href="/">Forbole</a>,
    redelegateTo: <a href="/">Forbole</a>,
    amount: '1,000 ATOM',
  },
  {
    address: <Address />,
    from: <a href="/">Forbole</a>,
    redelegateTo: <a href="/">Forbole</a>,
    amount: '1,000 ATOM',
  },
  {
    address: <Address />,
    from: <a href="/">Forbole</a>,
    redelegateTo: <a href="/">Forbole</a>,
    amount: '1,000 ATOM',
  },
  {
    address: <Address />,
    from: <a href="/">Forbole</a>,
    redelegateTo: <a href="/">Forbole</a>,
    amount: '1,000 ATOM',
  },
  {
    address: <Address />,
    from: <a href="/">Forbole</a>,
    redelegateTo: <a href="/">Forbole</a>,
    amount: '1,000 ATOM',
  },
  {
    address: <Address />,
    from: <a href="/">Forbole</a>,
    redelegateTo: <a href="/">Forbole</a>,
    amount: '1,000 ATOM',
  },
  {
    address: <Address />,
    from: <a href="/">Forbole</a>,
    redelegateTo: <a href="/">Forbole</a>,
    amount: '1,000 ATOM',
  },
  {
    address: <Address />,
    from: <a href="/">Forbole</a>,
    redelegateTo: <a href="/">Forbole</a>,
    amount: '1,000 ATOM',
  },
  {
    address: <Address />,
    from: <a href="/">Forbole</a>,
    redelegateTo: <a href="/">Forbole</a>,
    amount: '1,000 ATOM',
  },
  {
    address: <Address />,
    from: <a href="/">Forbole</a>,
    redelegateTo: <a href="/">Forbole</a>,
    amount: '1,000 ATOM',
  },
  {
    address: <Address />,
    from: <a href="/">Forbole</a>,
    redelegateTo: <a href="/">Forbole</a>,
    amount: '1,000 ATOM',
  },
  {
    address: <Address />,
    from: <a href="/">Forbole</a>,
    redelegateTo: <a href="/">Forbole</a>,
    amount: '1,000 ATOM',
  },

];
