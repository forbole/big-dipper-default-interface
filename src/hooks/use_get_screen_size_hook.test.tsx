import { renderHook } from '@testing-library/react-hooks';
import { useGetScreenSizeHook } from '.';

test('useMobileNavHook', async () => {
  const { result } = renderHook(() => useGetScreenSizeHook());
  expect(result.current.isDesktop).toBe(false);
  expect(result.current.windowSize).toHaveProperty('height');
  expect(result.current.windowSize).toHaveProperty('width');
});
