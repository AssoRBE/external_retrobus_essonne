import { Container, Center, Image, Heading, Text, VStack } from "@chakra-ui/react";

export default function RetroMerch() {
  return (
    <Container maxW="7xl">
      <VStack spacing={4} mt={2}>
        <Heading>RétroMerch</Heading>
        <Text>La boutique arrive bientôt !</Text>
        <Center w="100%" py={6}>
          <Image
            src="/retromerch_coming.png"
            alt="RétroMerch - Bientôt disponible"
            maxH="360px"
            objectFit="contain"
            fallbackSrc="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
          />
        </Center>
      </VStack>
    </Container>
  );
}
