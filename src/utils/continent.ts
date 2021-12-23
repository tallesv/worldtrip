const continents = [
  {
    url: 'europe',
    continent: 'Europa',
    about: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
    banner: '/europe-banner.png',
    contriesAmount: 50,
    languagesAmount: 60,
    citiesAmount: 27,
    cities: [
      {
        name: 'Londres',
        country: 'Reino Unido',
        cityImage: '/london.png',
        countryImage: '/uk.png'
      },
      {
        name: 'Paris',
        country: 'França',
        cityImage: '/paris.png',
        countryImage: '/france.png'
      },
      {
        name: 'Roma',
        country: 'Itália',
        cityImage: '/rome.png',
        countryImage: '/italy.png'
      },
      {
        name: 'Praga',
        country: 'República Tcheca',
        cityImage: '/prague.png',
        countryImage: '/czech.png'
      },
      {
        name: 'Amsterdã',
        country: 'Holanda',
        cityImage: '/amsterdam.png',
        countryImage: '/netherlands.png'
      },
    ] 
  },
  {
    url: 'america',
    continent: 'América',
    about: 'A América é o continente localizado no hemisfério ocidental e que se estende, no sentido norte-sul, desde o oceano Ártico até o cabo Horn, ao longo de cerca de 15 mil quilômetros. O seu extremo oriental insular (não continental) encontra-se na Groenlândia, o Nordostrundingen, enquanto o ocidental localiza-se nas Aleutas. Já os extremos continentais (não insulares) são o cabo Príncipe de Gales, o extremo ocidental, no Alasca, e a ponta do Seixas, extremo oriental, no estado brasileiro da Paraíba',
    banner: '/america-banner.jpg',
    contriesAmount: 35,
    languagesAmount: 8,
    citiesAmount: 14,
    cities: [
      {
        name: 'Nova York',
        country: 'Estados Unidos',
        cityImage: '/new-york.jpg',
        countryImage: '/united-states.png'
      },
      {
        name: 'Los Angeles',
        country: 'Estados Unidos',
        cityImage: '/los-angeles.jpg',
        countryImage: '/united-states.png'
      },
      {
        name: 'Toronto',
        country: 'Canadá',
        cityImage: '/toronto.jpg',
        countryImage: '/canada.png'
      },
      {
        name: 'Cidade do México',
        country: 'México',
        cityImage: '/mexico-city.jpg',
        countryImage: '/mexico.png'
      },
      {
        name: 'Rio de Janeiro',
        country: 'Brasil',
        cityImage: '/rio-de-janeiro.jpg',
        countryImage: '/brazil.png'
      },
      {
        name: 'Buenos Aires',
        country: 'República Tcheca',
        cityImage: '/buenos-aires.jpg',
        countryImage: '/argentina.png'
      },
      {
        name: 'Montevidéu',
        country: 'Uruguai',
        cityImage: '/montevideo.jpg',
        countryImage: '/uruguay.png'
      },
    ] 
  },
  {
    url: 'asia',
    continent: 'Ásia',
    about: 'A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial. A Ásia faz fronteira no lado ocidental com a África e com a Europa, e no lado oriental com o oceano Pacífico, a Oceania e, em menor proporção, com a América do Norte, pelo Estreito de Bering. O ponto extremo setentrional do continente está localizado no oceano Glacial Ártico. Mas na parte meridional, a Ásia chega ao seu final na região mais quente dos trópicos, nas imediações da linha do equador.',
    banner: '/asia-banner.jpg',
    contriesAmount: 50,
    languagesAmount: 72,
    citiesAmount: 22,
    cities: [
      {
        name: 'Tóquio',
        country: 'Japão',
        cityImage: '/tokyo.jpg',
        countryImage: '/japan.png'
      },
      {
        name: 'Xangai',
        country: 'China',
        cityImage: '/shanghai.jpg',
        countryImage: '/china.png'
      },
      {
        name: 'Bangkok',
        country: 'Tailândia',
        cityImage: '/bangkok.jpg',
        countryImage: '/thailand.png'
      },
      {
        name: 'Deli',
        country: 'Índia',
        cityImage: '/deli.jpg',
        countryImage: '/india.png'
      },
      {
        name: 'Seul',
        country: 'Coreia do Sul',
        cityImage: '/seul.jpg',
        countryImage: '/south-korea.png'
      },
    ] 
  },
  {
    url: 'africa',
    continent: 'África',
    about: 'A África costuma ser regionalizada de duas formas. A primeira valoriza a localização dos países e os divide em cinco grupos: África setentrional, África Ocidental, África central, África Oriental e África meridional. A segunda regionalização usa critérios étnicos e culturais, como a religião e etnias predominantes em cada região, sendo dividida em dois grandes grupos, a África Branca ou setentrional, formada pelos oito países da África do norte, mais a Mauritânia e o Saara Ocidental, e a África Negra ou subsaariana, formada pelos outros 44 países do continente.',
    banner: '/africa-banner.png',
    contriesAmount: 54,
    languagesAmount: 250,
    citiesAmount: 10,
    cities: [
      {
        name: 'Cairo',
        country: 'Egito',
        cityImage: '/cairo.jpg',
        countryImage: '/egypt.png'
      },
      {
        name: 'Alexandria',
        country: 'Egito',
        cityImage: '/alexandria.jpg',
        countryImage: '/egypt.png'
      },
      {
        name: 'Joanesburgo',
        country: 'África do Sul',
        cityImage: '/Johannesburg.jpg',
        countryImage: '/south-africa.png'
      },
      {
        name: 'Casablanca',
        country: 'Marrocos',
        cityImage: '/casablanca.jpg',
        countryImage: '/morocco.png'
      },
    ] 
  },
  {
    url: 'oceania',
    continent: 'Oceania',
    about: `A Oceania é composta por vários grupos de ilhas do oceano Pacífico (Polinésia, Melanésia e Micronésia). O termo Oceania foi criado em 1831 pelo explorador francês Dumont d'Urville. O termo é usado hoje em vários idiomas para designar uma região geográfica e política que compreende o continente da Austrália e ilhas do Oceano Pacífico adjacentes.`,
    banner: '/oceania-banner.png',
    contriesAmount: 16,
    languagesAmount: 18,
    citiesAmount: 8,
    cities: [
      {
        name: 'Sidney',
        country: 'Austrália',
        cityImage: '/sidney.jpg',
        countryImage: '/australia.png'
      },
      {
        name: 'Melborne',
        country: 'Austrália',
        cityImage: '/melbourne.jpg',
        countryImage: '/australia.png'
      },
      //{
      //  name: 'Auckland',
      //  country: 'Nova Zelândia',
      //  cityImage: '/auckland.jpg',
      //  countryImage: '/italy.png'
      //},
      //{
      //  name: 'Wellington',
      //  country: 'Nova Zelândia',
      //  cityImage: '/wellington.jpg',
      //  countryImage: '/czech.png'
      //},
      //{
      //  name: 'Jacarta',
      //  country: 'Indonésia',
      //  cityImage: '/jakarta.jpg',
      //  countryImage: '/netherlands.png'
      //},
    ] 
  }
]

export default continents;