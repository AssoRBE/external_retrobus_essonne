import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Container,
  Heading,
  Text,
  Box,
  Image,
  Stack,
  Badge,
  SimpleGrid,
  Button,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import vehicleImage from "../assets/920_pres.jpg"; // Assurez-vous que l'image est dans ce chemin

export default function Vehicles() {
  const [mainSrc] = useState(vehicleImage);

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
    source: "https://tc-infos.fr/vehicule/24991",
  };

  return (
    <>
      <Helmet>
        <title>Parc de véhicules — {vehicle.title}</title>
        <meta name="description" content={`Fiche détaillée pour ${vehicle.title}`} />
      </Helmet>

      <Container maxW="3xl" centerContent py={{ base: 6, md: 10 }}>
        <Stack spacing={6} w="100%" align="center">
          <Heading as="h1" size="lg" textAlign="center">
            Parc de véhicules
          </Heading>
          <Text color="gray.600" textAlign="center">
            Cliquez sur la carte pour voir les détails du véhicule.
          </Text>

          {/* Carte principale */}
          <RouterLink to={`/parc/${vehicle.id}`}>
            <Box
              w="100%"
              bg="white"
              borderRadius="lg"
              boxShadow="sm"
              border="1px solid"
              borderColor="gray.100"
              overflow="hidden"
              cursor="pointer"
              _hover={{ boxShadow: "md" }}
            >
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0}>
                {/* Image */}
                <Box minH={{ base: "240px", md: "420px" }} bg="gray.50">
                  <Image
                    src={mainSrc}
                    alt={`${vehicle.title} ${vehicle.registration}`}
                    objectFit="cover"
                    w="100%"
                    h="100%"
                  />
                </Box>

                {/* Détails */}
                <Box p={{ base: 5, md: 8 }}>
                  <Stack spacing={4}>
                    <Stack direction="row" align="center" spacing={3}>
                      <Heading as="h2" size="lg">
                        {vehicle.title}
                      </Heading>
                      <Badge colorScheme="red" variant="subtle">
                        {vehicle.year}
                      </Badge>
                    </Stack>
                    <Text color="gray.700">{vehicle.subtitle}</Text>
                    <Text color="gray.600" mt={2}>
                      {vehicle.description}
                    </Text>
                  </Stack>
                </Box>
              </SimpleGrid>
            </Box>
          </RouterLink>
        </Stack>
      </Container>
    </>
  );
}
