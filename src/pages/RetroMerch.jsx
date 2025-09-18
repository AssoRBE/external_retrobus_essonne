import { Box, Container, Heading, Image, Text, Stack } from "@chakra-ui/react";
import logoMerch from "../assets/retromerch_branding.svg";

export default function RetroMerch() {
  return (
    <Box
      className="page-with-mark"
      bg="white"
      py={{ base: 12, md: 20 }}
    >
      <Container maxW="4xl" textAlign="center">
        <Stack spacing={6} align="center">
          {/* Titre + logo */}
          <Heading
            as="h1"
            size="2xl"
            fontFamily="Nimbus Sans T OT, sans-serif"
            fontWeight="700"
            letterSpacing="wide"
          >
            Bienvenue sur le{" "}
            <Image
              src={logoMerch}
              alt="Logo RétroMerch"
              display="inline-block"
              h="70px"
              mx={2}
              verticalAlign="middle"
            />{" "}
            !
          </Heading>

          {/* Texte d’intro */}
          <Text
            fontSize="xl"
            maxW="2xl"
            color="blackAlpha.700"
            fontFamily="Nimbus Sans T OT, sans-serif"
          >
            Retrouvez bientôt nos miniatures, objets et textiles autour du
            patrimoine autobus. Le shop RétroMerch ouvre ses portes très
            prochainement.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
