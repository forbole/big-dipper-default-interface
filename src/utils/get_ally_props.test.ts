import { getAllyProps } from '.';

test('getAllyProps', async () => {
  expect(getAllyProps(1)).toEqual({
    id: 'scrollable-auto-tab-1',
    'aria-controls': 'scrollable-auto-tabpanel-1',
  });
});
