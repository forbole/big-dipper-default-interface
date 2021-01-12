import { formatMiddleEllipse } from '.';

test('formatMiddleEllipse', async () => {
  expect(formatMiddleEllipse('hello world')).toEqual('hel...rld');
  expect(formatMiddleEllipse('hi')).toEqual('hi');
  expect(formatMiddleEllipse('hey')).toEqual('h...y');
});
