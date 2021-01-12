import { getBaseCommunityPool } from '.';

test('getBaseCommunityPool', async () => {
  expect(getBaseCommunityPool('daric', [{
    amount: 3000,
    denom: 'udaric',
  }])).toEqual(undefined);

  expect(getBaseCommunityPool('udaric', [{
    amount: 3000,
    denom: 'udaric',
  }])).not.toEqual(undefined);
});
