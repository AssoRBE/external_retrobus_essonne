import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container maxW="7xl">
      <Heading mb={3}>Bienvenue</Heading>
      <Text>Site officiel de l’Association RétroBus Essonne.</Text>
      <Box h="300px" mt={6} bg="blackAlpha.50" border="1px solid" borderColor="blackAlpha.100" borderRadius="xl" />
    </Container>
  );
}
