import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme ({
  colors: {
    highlight: {
      "900": "FFBA08"
    },
    dark: {
      "900": "000000",
      "600": "47585B",
      "200": "999999",
    },
    light: {
      "900": "DADADA",
      "400": "F5F8FA",
      "50": "FFFFFF",
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'light.400',
        color: 'dark.600'
      }
    }
  }
})