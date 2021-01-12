import { convertNumber } from '.';

test('convertNumber', async () => {
  const number = 10000;
  expect(convertNumber(number).display).toEqual('10,000');
  expect(convertNumber(number, {
    suffix: 'DSM',
  }).display).toEqual('10,000 DSM');
  expect(convertNumber(number, {
    prefix: '$',
  }).display).toEqual('$10,000');
  expect(convertNumber(number, {
    prefix: '$',
    format: '0a',
  }).display).toEqual('$10k');
});
