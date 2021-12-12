import { Box, Flex, Image, Text, useBreakpointValue, SimpleGrid } from '@chakra-ui/react'
import type { NextPage } from 'next'
import React from 'react'
import { Header } from '../components/Header'
import { TravelType } from '../components/TravelType'
import { ContinentsCarousel } from '../components/ContinentsCarousel'

const Home: NextPage = () => {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Box>
      <Header />

      <Flex
        h={["163", "280"]}
        p={["5", "5"]}
        bgImage="url(/background.png)"
        bgSize="cover"
        bgRepeat="no-repeat"
        justifyContent={{base: "center", lg: "space-around" }}
      >
        <Flex 
          mt={["2", "8"]}
          mb={["1", "2"]}
          flexDirection="column" 
          justifyContent="space-between"
        >
          <Text color="gray.50" fontWeight="medium" fontSize={["18", "34"]}>
            5 Continentes,
            <br />
            infinitas possibilidades.
          </Text>

          <Text color="gray.350" fontSize={["12", "16"]}>
            Chegou a hora de tirar do papel a viagem que você
            <br />
            sempre sonhou.
          </Text>
        </Flex>

        { isWideVersion && <Image src="airplane.png" alt="airplane" position="relative" top="41" />}
      </Flex>

      <Box maxW={["400", "1560"]} my={[5, 61]} mx="auto" px="10">
        <SimpleGrid gap="4" minChildWidth="120px" justifyItems='center'>
          <TravelType src="nightlife" />
          <TravelType src="beach" />
          <TravelType src="modern" />
          <TravelType src="classic" />
          <TravelType src="more" />
        </SimpleGrid>
      </Box>


      <Box m="auto" w="10%" bgColor="gray.450" borderBottom="2px" mb={[5, 10]} />

      <Flex
        direction="column"
        align="center"
        my={[4 ,10]}
      >
        <Text fontSize={[20, 26, 32]} fontWeight="500"> Vamos nessa ?</Text>
        <Text fontSize={[20, 26, 32]} fontWeight="500">Então escolha o seu continente</Text>
      </Flex>

      <ContinentsCarousel />
    </Box>
  )
}

export default Home
