import { Box, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react'
import type { NextPage } from 'next'
import React from 'react'
import { Header } from '../components/Header'

const Home: NextPage = () => {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Box>
      <Header />

      <Flex
        h={["163", "368"]}
        p={["4", "10"]}
        bgImage="url(/background.png)"
        bgSize="cover"
        bgRepeat="no-repeat"
        justifyContent={{ lg: "space-around" }}
      >
        <Flex 
          mt={["2", "14"]}
          mb={["1", "3"]}
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

        { isWideVersion && <Image src="airplane.png" alt="airplane" position="relative" top="65" />}
      </Flex>
    </Box>
  )
}

export default Home
