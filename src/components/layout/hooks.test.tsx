import {
  renderHook,
  act,
} from '@testing-library/react-hooks';
import {
  useMobileNavHook,
  useDesktopNavHook,
} from './hooks';

test('useMobileNavHook', async () => {
  const { result } = renderHook(() => useMobileNavHook(false));
  expect(result.current.isOpen).toBe(false);
  act(() => {
    result.current.openNetwork();
  });
  expect(result.current.isOpen).toBe(true);
  act(() => {
    result.current.toggleNavMenus();
  });
  expect(result.current.isOpen).toBe(false);
  expect(result.current.isNetworkOpen).toBe(false);
  act(() => {
    result.current.openNetwork();
  });
  expect(result.current.isNetworkOpen).toBe(true);
});

test('useDesktopNavHook', () => {
  const isDesktop = true;
  const { result } = renderHook(() => useDesktopNavHook(isDesktop));
  expect(result.current.isMenuOpen).toBe(false);
  act(() => {
    result.current.toggleMenu();
  });
  expect(result.current.isMenuOpen).toBe(true);
  act(() => {
    result.current.toggleNetwork();
  });
  expect(result.current.isNetworkOpen).toBe(true);
  act(() => {
    result.current.turnOffTabs();
  });
  expect(result.current.isNetworkOpen).toBe(false);
  expect(result.current.isMenuOpen).toBe(false);
});
