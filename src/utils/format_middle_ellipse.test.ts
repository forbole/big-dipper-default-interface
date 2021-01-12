import { formatMiddleEllipse } from '.';

test('formatMiddleEllipse', async () => {
  expect(formatMiddleEllipse('hello world')).toEqual('hell...ld');
  expect(formatMiddleEllipse('hi')).toEqual('hi');
  expect(formatMiddleEllipse('hey')).toEqual('hey');
  expect(formatMiddleEllipse('heel')).toEqual('he...l');
  expect(formatMiddleEllipse('heel', {
    beginning: 5,
    ending: 6,
  })).toEqual('heel');

  expect(formatMiddleEllipse('heel', {
    beginning: 3,
    ending: 1,
  })).toEqual('heel');

  expect(formatMiddleEllipse('heel', {
    beginning: 2,
    ending: 1,
  })).toEqual('he...l');
});
