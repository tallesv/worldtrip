import { Flex, FlexProps, Image, useBreakpointValue } from "@chakra-ui/react";

interface TravelTypeProps extends FlexProps {
  src: string;
}

export function TravelType({ src, ...rest }: TravelTypeProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });
  let srcToImage;

  if (isWideVersion) {
    srcToImage = src + '.png'
  } else {
    srcToImage = src + '-base.png'
  }

  return (
    <Flex {...rest}>
      <Image src={srcToImage} alt={src}/>
    </Flex>
  );
}