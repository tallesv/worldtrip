import { Box, BoxProps, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image'

interface CityCardProps extends BoxProps {

}

export default function CityCard({ ...rest }: CityCardProps) {

  return (
    <Box {...rest}>
      <Image src="/london.png" alt="london" width={256} height={173} />

      <Flex p={4} justifyContent="space-between" alignItems="center">
        <Flex direction="column">
          <Text fontSize={20} fontWeight="600">Londres</Text>
          <Text mt={2} fontSize={16} fontWeight="500" color="gray.450">Reino Unido</Text>
        </Flex>
        <Image src="/uk.png" alt="uk" width={30} height={30} />
      </Flex>
    </Box>
  );
}