import { Flex, Button, Box } from '@chakra-ui/react';
import Image from 'next/image'
import { useRouter } from 'next/router'


export function Header() {

  const { push, pathname } = useRouter();

  if (pathname === '/') {
    return (
      <Flex h={[71, 81]} justifyContent="center">
        <Flex w={81} />
        <Image src="/logo.png" alt="logo" height={150} width={150} />
        <Flex w={81} />
      </Flex>
    )
  }

  return (
    <Flex h={[71, 81]} maxW={1600} mx="auto" justifyContent="space-between">
      <Flex w={81} justifyContent="center">
        <Button
          onClick={() => push('/')}
          alignSelf="center"
          _hover={{ bg: 'unset' }}
          _focus={{ borderColor: 'unset' }}
          _active={{ borderColor: 'unset' }}
        >
          <Image src="/back.png" alt="back" height={35} width={30}/>
        </Button>
        </Flex>
      <Image src="/logo.png" alt="logo" height={150} width={150} />

      <Flex width={81} />
    </Flex>
  )
}