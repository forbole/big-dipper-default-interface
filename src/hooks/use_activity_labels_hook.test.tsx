import { renderHook } from '@testing-library/react-hooks';
import { useActivityLabelsHook } from '.';

test('useMobileNavHook', async () => {
  const { result } = renderHook(() => useActivityLabelsHook());
  expect(result.current.collapsibleLabels).toHaveProperty('hash');
  expect(result.current.collapsibleLabels).toHaveProperty('height');
  expect(result.current.collapsibleLabels).toHaveProperty('fee');
  expect(result.current.collapsibleLabels).toHaveProperty('gas');
  expect(result.current.collapsibleLabels).toHaveProperty('status');
});
