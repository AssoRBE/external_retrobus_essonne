import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Container,
  Heading,
  Text,
  Box,
  Image,
  Stack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import vehicleImage1 from "../assets/920_pres.jpg";
import vehicleImage2 from "../assets/920_side.jpg";
import vehicleImage3 from "../assets/920_back.jpg";

export default function Vehicles() {
  const vehicle = {
    id: "24991",
    title: "Mercedes‑Benz Citaro",
    subtitle: "Citaro 1 €2",
    make: "Mercedes Benz",
    model: "Citaro 1 €2",
    year: "juillet 2001",
    registration: "FG-920-RE",
    description:
      "Mise en service commerciale en juillet 2001. Ce véhicule est un exemple emblématique de la gamme Citaro.",
    history:
      "Le Mercedes-Benz Citaro est un autobus urbain produit par Daimler AG. Introduit en 1997, il est devenu un standard dans les transports publics européens. Ce modèle, mis en service en juillet 2001, a servi dans plusieurs villes avant d'être préservé par l'association RétroBus Essonne.",
    gallery: [vehicleImage1, vehicleImage2, vehicleImage3],
  };

  return (
    <>
      <Helmet>
        <title>Page véhicule — {vehicle.title}</title>
        <meta name="description" content={`Fiche détaillée pour ${vehicle.title}`} />
      </Helmet>

      <Container maxW="6xl" py={{ base: 6, md: 10 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {/* Galerie verticale */}
          <VStack spacing={4} align="start">
            {vehicle.gallery.map((src, index) => (
              <Box
                key={index}
                border="1px solid"
                borderColor="gray.200"
                borderRadius="md"
                overflow="hidden"
                w="100%"
              >
                <Image src={src} alt={`Photo ${index + 1}`} objectFit="cover" />
              </Box>
            ))}
          </VStack>

          {/* Histoire et détails */}
          <Stack spacing={6}>
            <Heading as="h1" size="lg">
              {vehicle.title}
            </Heading>
            <Text color="gray.600">{vehicle.subtitle}</Text>
            <Text fontSize="sm" fontWeight="600">Constructeur : {vehicle.make}</Text>
            <Text fontSize="sm" fontWeight="600">Modèle : {vehicle.model}</Text>
            <Text fontSize="sm" fontWeight="600">Mise en service : {vehicle.year}</Text>
            <Text fontSize="sm" fontWeight="600">Plaque : {vehicle.registration}</Text>
            <Text color="gray.700">{vehicle.description}</Text>
            <Text color="gray.700">{vehicle.history}</Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  );
}
