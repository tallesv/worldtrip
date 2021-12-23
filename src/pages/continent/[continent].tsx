import { Box, Text, Flex, Tooltip } from "@chakra-ui/react";
import { InfoOutlineIcon } from '@chakra-ui/icons';
import { Header } from "../../components/Header";
import CityCard from "../../components/CityCard";

import continents from "../../utils/continent";
import { GetStaticPaths } from "next";

interface City {
  name: string,
  country: string,
  cityImage: string,
  countryImage: string,
}
interface Continent {
  continent: string,
  about: string,
  banner: string,
  contriesAmount: number,
  languagesAmount: number,
  citiesAmount: number,
  cities: City[],
}


export default function Continent ({ continent, about, banner, contriesAmount, languagesAmount, citiesAmount, cities }: Continent) {
  return (
    <Box>
      <Header />

      <Flex
        bgImage={`url(${banner})`}
        bgSize="cover"
        h={[150, 450]}
        p={20}
        justifyContent={["center", "flex-start"]}
        alignItems={["center", "flex-end"]}
      >
        <Text fontSize={32} color="gray.50" fontWeight={600}>{continent}</Text>
      </Flex>

      <Flex mx={10} direction="column" alignItems="flex-start">
        <Flex my={10} w="100%" direction={{ base: 'column', lg: 'row' }} justifyContent="space-around" alignItems="center">
          <Text maxW="600" fontSize={22} lineHeight="36px">{about}</Text>

          <Flex my={{ base: 10, lg: 0 }} justifyContent="space-between">
            <Flex mx={[4, 10]} direction="column">
              <Text fontSize={[36, 46]} fontWeight="bold" color="yellow.300" alignSelf="center">{contriesAmount}</Text>
              <Text fontSize={[18, 20]} fontWeight="bold"> países</Text>
            </Flex>
            <Flex mx={[4, 10]} direction="column">
              <Text fontSize={[36, 46]} fontWeight="bold" color="yellow.300" alignSelf="center">{languagesAmount}</Text>
              <Text fontSize={[18, 20]} fontWeight="bold">línguas</Text>
            </Flex>
            <Flex mx={[4, 10]} direction="column">
              <Text fontSize={[36, 46]} fontWeight="bold" color="yellow.300" alignSelf="center">{citiesAmount}</Text>
              <Flex alignItems="center">
                <Text mr={2} fontSize={[18, 20]} fontWeight="bold">cidades +100</Text>
                <Tooltip label='154 cidades' fontSize="md">
                    <InfoOutlineIcon />
                </Tooltip>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex ml={{ xl: "2%", '2xl': "7%" }} m={['auto', 'unset']} direction="column" alignContent={"center"}>
          <Text my={[10]} fontSize={36} fontWeight="500">Cidades +100</Text>

          <Flex direction={['column', 'row']} justifyContent={['center', 'flex-start']} flexWrap="wrap">
            {cities?.map(city => (
              <CityCard key={city.name} city={city} w={256} h={279} mr={[45]} mb={45} bgColor="white" border="1px" borderRadius={6} borderColor="yellow.150"/>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = continents.map(continent => ({ params: { continent: continent.url } }));

  return {
      paths, //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}

export async function getStaticProps({ params } : any) {
  const { continent: url } = params;
  const findContinent = continents.find(continent => continent.url === url);
  return { 
    props: {
      ...findContinent
    } 
  }
}
