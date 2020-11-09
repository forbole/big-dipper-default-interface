import { ThemeModeContext } from '@contexts';
import { WithMockMaterialTheme } from './mock_material_theme';

interface Iprops {
  component: React.ReactElement;
  theme: any;
}

const themeContextMock = {
  getThemeMode: jest.fn(() => ({
    value: 'light',
    key: 'light',
  })),
  toggleThemeMode: jest.fn(() => {}),
  getCurrentLanguage: jest.fn(() => ({
    key: 'en',
    value: 'English',
  })),
  changeLanguage: jest.fn(() => {}),
};

export const BaseWrapper = ({
  component, theme,
}: Iprops) => {
  return (
    <ThemeModeContext.Provider
      value={themeContextMock}
    >
      {WithMockMaterialTheme({
        component,
        theme,
      })}
    </ThemeModeContext.Provider>
  );
};
