import { ThemeProvider } from '@material-ui/core/styles';

interface Iprops {
  component: React.ReactElement;
  theme: any;
}

export const WithMockMaterialTheme = ({
  component,
  theme,
}: Iprops) => {
  return (
    <ThemeProvider
      theme={theme}
    >
      {component}
    </ThemeProvider>
  );
};
