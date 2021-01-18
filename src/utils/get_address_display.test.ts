import { ValidatorAddressList } from '@models';
import { getAddressDisplay } from '.';

test('getAddressDisplay', async () => {
  const validators = {
    123: ValidatorAddressList.fromJson({
      validator_description: {
        moniker: 'Bob',
      },
    }),
  };
  expect(getAddressDisplay('123', validators)).toEqual('Bob');
  expect(getAddressDisplay('1233', validators)).toEqual('1233');
});
