import { Helmet } from "react-helmet-async";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Events(){
  return (
    <>
      <Helmet><title>Sorties & evenements â€” RBE</title></Helmet>
      <Heading as="h1">Sorties & evenements</Heading>
      <Box className="card" mt={6}>
        <Text>Prochaines dates a venir. Pour privatiser un vehicule, onglet Reserver.</Text>
      </Box>
    </>
  );
}
