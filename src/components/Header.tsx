import { Flex, Image } from '@chakra-ui/react'

export function Header() {

  return (
    <Flex h="100" justifyContent="center">
      <Image src="logo.png" alt="logo" />
    </Flex>
  )
}