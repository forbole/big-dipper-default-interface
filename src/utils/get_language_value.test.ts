import { getLanguageValue } from '.';

test('getLanguageValue', async () => {
  expect(getLanguageValue('en')).toEqual('English');
  expect(getLanguageValue('zht')).toEqual('');
});
