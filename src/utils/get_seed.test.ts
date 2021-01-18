import { getSeed } from '.';

test('getSeed', async () => {
  expect(getSeed('123')).toEqual(150);
});
