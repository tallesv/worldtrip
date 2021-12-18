import { Box, Text, Flex, Tooltip } from "@chakra-ui/react";
import { InfoOutlineIcon } from '@chakra-ui/icons';
import { Header } from "../../components/Header";



export default function Continent () {
  return (
    <Box>
      <Header />

      <Flex
        bgImage="url(/europe-banner.png)"
        bgSize="cover"
        h={[150, 450]}
        p={20}
        justifyContent={["center", "flex-start"]}
        alignItems={["center", "flex-end"]}
      >
        <Text fontSize={32} color="gray.50" fontWeight={600}>Europa</Text>
      </Flex>

      <Flex my={10} mx={50} direction={{ base: 'column', lg: 'row' }} justifyContent="space-around" alignItems="center">
        <Text maxW="600" fontSize={22} lineHeight="36px">
          A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>

        <Flex my={{ base: 10, lg: 0 }} justifyContent="space-between">
          <Flex mx={[4, 10]} direction="column">
            <Text fontSize={[36, 46]} fontWeight="bold" color="yellow.300">50</Text>
            <Text fontSize={[18, 20]} fontWeight="bold"> países</Text>
          </Flex>
          <Flex mx={[4, 10]} direction="column">
            <Text fontSize={[36, 46]} fontWeight="bold" color="yellow.300">60</Text>
            <Text fontSize={[18, 20]} fontWeight="bold">línguas</Text>
          </Flex>
          <Flex mx={[4, 10]} direction="column">
            <Text fontSize={[36, 46]} fontWeight="bold" color="yellow.300">27</Text>
            <Flex alignItems="center">
              <Text mr={2} fontSize={[18, 20]} fontWeight="bold">cidades +100</Text>
              <Tooltip label='154 cidades' fontSize="md">
                  <InfoOutlineIcon />
              </Tooltip>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

