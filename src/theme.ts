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
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        fontSize: '2xl',
        color: 'white',
        textTransform: 'uppercase',
        h: '45px',
        border: '2px solid #C3A3C9',
        bg: '8B538F',
      },
      sizes: {
        lg: {
          h: '45px',
          fontSize: 'lg',
          px: '32px',
        },
      },
      variants: {
        map: {
          bg: '#8B538F',
          color: '#FEDC2A',
          _hover: {
            bg: '#5A3B5D',
            borderWidth: '4px',
            _disabled: {
              bg: '#555',
              color: 'white',
              borderWidth: '2px',
            },
          },
          _disabled: {
            bg: '#555',
            color: 'white',
          },
        },
        normal: {
          bg: '#8B538F',
          color: 'white',
          _hover: {
            bg: '#5A3B5D',
            borderWidth: '4px',
            _disabled: {
              bg: '#555',
              color: 'white',
              borderWidth: '2px',
            },
          },
          _disabled: {
            bg: '#555',
            color: 'white',
          },
        },
        pagination: {
          color: '#555',
          border: 0,
          _hover: {
            bg: '#8B538F',
            color: 'white',
            borderRadius: '4',
          },
        },
      },
      defaultProps: {
        variant: 'solid',
        size: 'lg',
      },
    },
  },
});

export default theme;
