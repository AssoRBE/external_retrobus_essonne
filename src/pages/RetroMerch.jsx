import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import logoMerch from "../assets/retromerch_branding.svg";

export default function RetroMerch() {
  return (
    <Box className="page-with-mark">
      <Container maxW="5xl" py={12} textAlign="center">
        {/* Titre + logo */}
        <Heading as="h1" size="2xl" mb={6}>
          Bienvenue sur le{" "}
          <Image
            src={logoMerch}
            alt="Logo RétroMerch"
            display="inline-block"
            h="60px"
            mx={2}
            verticalAlign="middle"
          />{" "}
          !
        </Heading>

        {/* Placeholder pour le futur contenu */}
        <Text fontSize="lg" color="blackAlpha.700">
          Retrouvez bientôt nos articles, miniatures et objets autour du patrimoine autobus.
        </Text>
      </Container>
    </Box>
  );
}
