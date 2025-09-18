import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Container,
  Heading,
  Text,
  Box,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import vehicleImage1 from "../assets/920_pres.jpg";
import vehicleImage2 from "../assets/920_side.jpg";
import vehicleImage3 from "../assets/920_back.jpg";

export default function Vehicles() {
  const vehicles = [
    {
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
    },
  ];

  return (
    <>
      <Helmet>
        <title>Véhicules — RétroBus Essonne</title>
        <meta name="description" content="Liste des véhicules de RétroBus Essonne" />
      </Helmet>

      <Container maxW="6xl" py={{ base: 6, md: 10 }}>
        <Heading as="h1" size="2xl" mb={6}>
          Nos Véhicules
        </Heading>

        {vehicles.map((vehicle) => (
          <Box key={vehicle.id} mb={10}>
            <Heading as="h2" size="lg" mb={4}>
              {vehicle.title}
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={4}>
              {vehicle.subtitle}
            </Text>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
              {vehicle.gallery.map((src, index) => (
                <Box
                  key={index}
                  border="1px solid"
                  borderColor="gray.200"
                  borderRadius="md"
                  overflow="hidden"
                >
                  <Image src={src} alt={`Photo ${index + 1}`} objectFit="cover" />
                </Box>
              ))}
            </SimpleGrid>
            <Text mt={4} fontSize="md" color="gray.700">
              {vehicle.description}
            </Text>
          </Box>
        ))}
      </Container>
    </>
  );
}
