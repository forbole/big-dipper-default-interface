import { rgbaOpacityConverter } from '.';

test('rgbaOpacityConverter', async () => {
  expect(rgbaOpacityConverter('123', 0.4)).toEqual('123');
  expect(rgbaOpacityConverter('rgba(30, 196, 144, 0.7)', 0.4)).toEqual('rgba(30, 196, 144, 0.4)');
  expect(rgbaOpacityConverter('rgba(30, 196, 144,0.7)', 0.4)).toEqual('rgba(30, 196, 144, 0.4)');
});
