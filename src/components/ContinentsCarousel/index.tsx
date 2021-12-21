import { Box, Text, Flex } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from 'next/router'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper';
import { useState } from 'react';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);

const continents = [
  {
    title: 'Europa',
    subTitle: 'O continente mais antigo',
    image: 'europe-carousel.png',
    url: 'europe'
  },
  {
    title: 'América',
    subTitle: 'Tudo no seu alcance',
    image: 'america-carousel.jpg',
    url: 'america'
  },
  {
    title: 'Ásia',
    subTitle: 'Descobertas infinitas',
    image: 'asia-carousel.jpg',
    url: 'asia'
  },
  {
    title: 'África',
    subTitle: 'Inspirando novas maneiras',
    image: 'africa-carousel.jpg',
    url: 'africa'
  },
  {
    title: 'Oceania',
    subTitle: 'Onde a felicidade encontra você',
    image: 'oceania-carousel.jpg',
    url: 'oceania'
  },
]

export function ContinentsCarousel() {
  const { push } = useRouter();

  function handleNavigateToContinetPage(url: string) {
    push(`/continent/${url}`)
  }

  return (
    <Box
      maxW="1560"
      h={["250", "450"]}
      m="20px auto"
    >
      <Swiper
        spaceBetween={30}
        hashNavigation={{ "watchState": true }}
        pagination= {{ "clickable": true }}
        navigation={true}
        className="mySwiper"
      >
        {continents.map(continent => 
          <SwiperSlide key={continent.title} data-hash={continent.title} onClick={() => handleNavigateToContinetPage(continent.url)}>
            <Flex
              bgImage={`url(/${continent.image})`}
              bgSize="cover"
              w="100%"
              h="100%"
              position="absolute"
              direction="column"
              justifyContent='center'
            >
              <Text fontSize={[24 ,44]} fontWeight="bold" color="gray.350">{continent.title}</Text>
              <Text mt={[1 ,2]} fontSize={[14, 22]} fontWeight="bold" color="gray.350">{continent.subTitle}</Text>
            </Flex>
          </SwiperSlide>
        )}
      </Swiper>
    </Box>
  )
}