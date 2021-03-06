import type { AppProps } from 'next/app'
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import '../components/ContinentsCarousel/style.css'
import "swiper/css/bundle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
