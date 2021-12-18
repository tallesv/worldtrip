import { Flex } from '@chakra-ui/react';
import Image from 'next/image'

export function Header() {

  return (
    <Flex h={[61, 81]} justifyContent="center">
      <Image src="/logo.png" alt="logo" height={150} width={150} />
    </Flex>
  )
}