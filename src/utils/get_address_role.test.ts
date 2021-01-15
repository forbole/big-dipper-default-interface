import { getAddressRole } from '.';

test('getAddressRole', async () => {
  expect(getAddressRole('desmos...')).toEqual('user');
  expect(getAddressRole('desmosvalcons...')).toEqual('validator');
  expect(getAddressRole('123123')).toEqual(null);
});
