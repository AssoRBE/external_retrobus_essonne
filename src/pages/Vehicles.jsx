import { Container, Heading, Text, Box, Image, Stack, Badge, SimpleGrid, Button } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";

/*
  Fiche véhicule centrée pour le "seul" véhicule disponible.
  - Remplace les données de `vehicle` par les tiennes (images, année, immat, description...).
  - L'image utilisée par défaut : /src/assets/rbe_920.jpg (déjà présent dans le repo externe/src/assets).
*/

export default function Vehicles() {
  const vehicle = {
    id: "rbe-920",
    title: "RBE 920",
    subtitle: "Autobus historique restauré",
    make: "Berliet",
    model: "PR100",
    year: 1965,
    registration: "92-EB-65",
    image: "/src/assets/rbe_920.jpg", // change si tu préfères '/assets/...' — Vite résout /src assets imports too
    description:
      "RBE 920 est notre autobus historique restauré. Utilisé pour sorties et événements, il représente le patrimoine roulant local.",
    specs: [
      { label: "Constructeur", value: "Berliet" },
      { label: "Modèle", value: "PR100" },
      { label: "Année", value: "1965" },
      { label: "Immat.", value: "92-EB-65" },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Parc de véhicules — {vehicle.title}</title>
        <meta
          name="description"
          content={`Fiche de ${vehicle.title} — ${vehicle.subtitle}`}
        />
      </Helmet>

      <Container maxW="3xl" centerContent py={{ base: 6, md: 10 }}>
        <Stack spacing={6} w="100%" align="center">
          <Heading as="h1" size="xl" textAlign="center">
            Fiche véhicule
          </Heading>
          <Text color="gray.600" textAlign="center">
            Page centrée sur le véhicule disponible — tu peux ajouter d'autres fiches plus tard.
          </Text>

          {/* Card */}
          <Box
            w="100%"
            bg="white"
            borderRadius="lg"
            boxShadow="sm"
            border="1px solid"
            borderColor="gray.100"
            overflow="hidden"
          >
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0}>
              {/* Image */}
              <Box minH={{ base: "220px", md: "360px" }} bg="gray.50">
                <Image
                  src={vehicle.image}
                  alt={vehicle.title}
                  objectFit="cover"
                  w="100%"
                  h="100%"
                />
              </Box>

              {/* Details */}
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

                  <Stack direction={{ base: "column", sm: "row" }} spacing={3}>
                    {vehicle.specs.map((s) => (
                      <Box key={s.label} px={3} py={1} bg="gray.50" borderRadius="md" fontSize="sm">
                        <Text as="span" fontWeight="600">{s.label}:</Text>{" "}
                        <Text as="span" color="gray.700">{s.value}</Text>
                      </Box>
                    ))}
                  </Stack>

                  <Text color="gray.600" mt={2}>{vehicle.description}</Text>

                  <Stack direction="row" spacing={3} pt={2}>
                    <Button as="a" href="/contact" colorScheme="red" variant="solid">
                      Nous contacter pour une sortie
                    </Button>
                    <Button as="a" href="/parc" variant="outline">
                      Retour au parc
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </SimpleGrid>
          </Box>

          {/* Petite note / actions */}
          <Text fontSize="sm" color="gray.500" textAlign="center">
            Si tu veux ajouter plusieurs véhicules plus tard, on transformera cette page pour lister toutes les fiches et naviguer entre elles.
          </Text>
        </Stack>
      </Container>
    </>
  );
}
