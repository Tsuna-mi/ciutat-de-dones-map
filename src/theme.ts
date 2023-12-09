import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
  cssVarPrefix: 'ck',
};

const theme = extendTheme({
  config,
  colors: {
    primary: '#5A3B5D',
    secondary: '#8B538F',
    secondaryLight: '#C3A3C9',
    accent: '#FEDC2A',
    white: '#fff',
    yellow: '#FCDF87',
    gray5: '#555',
    gray3: '#333',
  },
  fonts: {
    heading: `'Kanit', sans-serif`,
    body: `'Source Sans Pro', sans-serif`,
  },
});

export default theme;
