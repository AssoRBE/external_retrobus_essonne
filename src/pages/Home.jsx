import { Helmet } from "react-helmet-async";
import {
  Box, Button, Container, Heading, SimpleGrid, Stack, Text, Image, VStack
} from "@chakra-ui/react";
import pageBg from "../assets/logo_arriere_plan.svg";

const photos = [
  "/assets/photos/p1.jpg","/assets/photos/p2.jpg","/assets/photos/p3.jpg","/assets/photos/p4.jpg",
  "/assets/photos/p5.jpg","/assets/photos/p6.jpg","/assets/photos/p7.jpg","/assets/photos/p8.jpg",
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Association RétroBus Essonne — Accueil</title>
        <meta
          name="description"
          content="Association RétroBus Essonne : préservation, sorties et mise en valeur des autobus historiques en Essonne."
        />
        <meta property="og:title" content="RétroBus Essonne" />
        <meta property="og:description" content="Préserver et partager le patrimoine autobus en Essonne." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Wrapper avec watermark configurable (utilise ta CSS .page-with-mark) */}
      <Box
        className="page-with-mark"
        style={{
          "--page-mark": `url(${pageBg})`,
          "--mark-size": "560px",
          "--mark-opacity": "0.06",
          "--mark-blend": "normal",
        }}
        data-pos-x="left"
        data-pos-y="bottom"
      >
        <Container maxW="7xl">
          {/* HERO */}
          <Stack
            as="section"
            direction={{ base: "column", md: "row" }}
            align="center"
            spacing={{ base: 8, md: 10 }}
            py={{ base: 8, md: 14 }}
          >
            <Box flex="1">
              <Heading as="h1" size="2xl" lineHeight="1.1">
                Préserver & partager le patrimoine autobus en Essonne
              </Heading>
              <Text mt={4} fontSize="lg" color="blackAlpha.700">
                RétroBus Essonne restaure des autobus emblématiques, organise des sorties et des
                animations pour faire découvrir l’histoire des transports.
              </Text>
              <Stack direction={{ base: "column", sm: "row" }} spacing={4} mt={6}>
                <Button as="a" href="/parc" size="lg" bg="#e40045" color="white" _hover={{ opacity: 0.9 }}>
                  Découvrir nos véhicules
                </Button>
                <Button as="a" href="/adhesion" size="lg" variant="outline">
                  Adhérer à l’association
                </Button>
              </Stack>
            </Box>
            <Box flex="1">
              <Box
                border="1px solid"
                borderColor="blackAlpha.200"
                borderRadius="2xl"
                overflow="hidden"
                bg="blackAlpha.50"
                minH="260px"
              >
                {/* Placeholder visuel (tu peux remplacer par une vraie image héro si tu veux) */}
                <Image
                  src="/assets/photos/p3.jpg"
                  alt="Sortie RBE en Essonne"
                  w="100%"
                  h={{ base: "220px", md: "100%" }}
                  objectFit="cover"
                />
              </Box>
            </Box>
          </Stack>

          {/* QUI SOMMES-NOUS */}
          <section id="a-propos">
            <Heading as="h2" size="xl" mb={3}>Qui sommes-nous ?</Heading>
            <Text fontSize="lg" color="blackAlpha.800">
              Association régie par la loi 1901, l'Association RétroBus Essonne préserve, collectionne et expose
              un patrimoine roulant
            </Text>
          </section>

          {/* NOS ACTIVITÉS */}
          <section style={{ marginTop: "40px" }}>
            <Heading as="h2" size="xl" textAlign="center">Nos activités</Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mt={6}>
              <Box p={6} border="1px solid" borderColor="blackAlpha.200" borderRadius="xl" bg="white">
                <Heading as="h3" size="md" mb={2}>🚍 Préservation</Heading>
                <Text>Restauration, entretien et documentation de véhicules emblématiques.</Text>
              </Box>
              <Box p={6} border="1px solid" borderColor="blackAlpha.200" borderRadius="xl" bg="white">
                <Heading as="h3" size="md" mb={2}>🚌 Sorties & événements</Heading>
                <Text>Balades, expositions, journées du patrimoine et animations locales.</Text>
              </Box>
              <Box p={6} border="1px solid" borderColor="blackAlpha.200" borderRadius="xl" bg="white">
                <Heading as="h3" size="md" mb={2}>📚 Archives & mémoire</Heading>
                <Text>Photothèque, témoignages et sauvegarde des documents d’époque.</Text>
              </Box>
            </SimpleGrid>
          </section>

          {/* NOS VÉHICULES (GALERIE SIMPLE) */}
          <section style={{ marginTop: "40px" }}>
            <Heading as="h2" size="xl" textAlign="center">Nos véhicules</Heading>
            <Text textAlign="center" color="blackAlpha.700" mt={2}>
              Un aperçu (la liste complète arrive dans la rubrique Parc).
            </Text>
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4} mt={6}>
              {photos.map((src, i) => (
                <Box
                  key={i}
                  border="1px solid"
                  borderColor="blackAlpha.200"
                  borderRadius="lg"
                  overflow="hidden"
                  bg="blackAlpha.50"
                >
                  <Image
                    src={src}
                    alt={`Bus RBE ${i + 1}`}
                    w="100%"
                    h={{ base: "100px", md: "140px" }}
                    objectFit="cover"
                    loading="lazy"
                  />
                </Box>
              ))}
            </SimpleGrid>
            <VStack mt={4}>
              <Button as="a" href="/parc" variant="ghost">Voir le parc de véhicules</Button>
            </VStack>
          </section>

          {/* CTA ADHÉSION */}
          <section style={{ marginTop: "48px", marginBottom: "12px" }}>
            <Box
              p={6}
              border="1px solid"
              borderColor="blackAlpha.200"
              borderRadius="2xl"
              bg="blackAlpha.50"
              textAlign="center"
            >
              <Heading as="h3" size="lg">Envie de nous rejoindre ?</Heading>
              <Text mt={2} color="blackAlpha.800">
                Deviens membre et aide-nous à faire vivre le patrimoine roulant en Essonne.
              </Text>
              <Button as="a" href="/adhesion" mt={4} bg="#e40045" color="white" _hover={{ opacity: 0.9 }}>
                Adhérer à l’association
              </Button>
            </Box>
          </section>
        </Container>
      </Box>
    </>
  );
}
