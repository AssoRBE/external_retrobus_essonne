import React from "react";
import { useParams } from "react-router-dom";
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

export default function VehicleDetails() {
  const { id } = useParams();
  const vehicle = vehicles.find((v) => v.id === id);

  if (!vehicle) {
    return (
      <Container maxW="6xl" py={10}>
        <Heading as="h1" size="2xl" mb={6}>
          Véhicule non trouvé
        </Heading>
        <Text>Le véhicule demandé n'existe pas.</Text>
      </Container>
    );
  }

  return (
    <Container maxW="6xl" py={10}>
      <Heading as="h1" size="2xl" mb={6}>
        {vehicle.title}
      </Heading>
      <Text fontSize="lg" color="gray.600" mb={4}>
        {vehicle.subtitle}
      </Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} mb={6}>
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
      <Text fontSize="md" color="gray.700" mb={4}>
        {vehicle.description}
      </Text>
      <Text fontSize="md" color="gray.700">
        {vehicle.history}
      </Text>
    </Container>
  );
}