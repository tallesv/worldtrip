import { Flex, Button, Box } from '@chakra-ui/react';
import Image from 'next/image'
import { useRouter } from 'next/router'


export function Header() {

  const { push, pathname } = useRouter();

  if (pathname === '/') {
    return (
      <Flex h={[71, 81]} justifyContent="center">
        <Image src="/logo.png" alt="logo" height={150} width={150} />
      </Flex>
    )
  }

  return (
    <Flex maxW={1000} mx="auto">
      <Button
        onClick={() => push('/')}
        alignSelf="center"
        _hover={{ bg: 'unset' }}
        _focus={{ borderColor: 'unset' }}
        _active={{ borderColor: 'unset' }}
      >
        <Image src="/back.png" alt="back" height={35} width={30}/>
      </Button>
    <Flex h={[71, 81]} w="100%" justifyContent="center" pr={['15%','7%', 0]}>
      <Image src="/logo.png" alt="logo" height={150} width={150} />
    </Flex>
    </Flex>
  )
}