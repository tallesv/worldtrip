import { Box, BoxProps, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image'

interface CityCardProps extends BoxProps {
  city: {
    name: string,
    country: string,
    cityImage: string,
    countryImage: string,
  }
}

export default function CityCard({ city, ...rest }: CityCardProps) {

  return (
    <Box {...rest}>
      <Image src={city.cityImage} alt={city.name} width={256} height={173} />

      <Flex p={4} justifyContent="space-between" alignItems="center">
        <Flex direction="column">
          <Text fontSize={20} fontWeight="600">{city.name}</Text>
          <Text mt={2} fontSize={16} fontWeight="500" color="gray.450">{city.country}</Text>
        </Flex>
        <Image src={city.countryImage} alt={city.country} width={30} height={30} />
      </Flex>
    </Box>
  );
}