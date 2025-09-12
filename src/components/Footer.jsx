import { Container, SimpleGrid, Text, Link as CLink } from "@chakra-ui/react";

export default function Footer(){
  return (
    <footer className="site-footer">
      <Container>
        <SimpleGrid columns={{ base:1, md:3 }} spacing={6}>
          <div>
            <Text fontWeight={700}>RetroBus Essonne</Text>
            <Text fontSize="sm" opacity={0.8}>Patrimoine des transports en Essonne.</Text>
          </div>
          <div>
            <Text fontWeight={700}>Liens utiles</Text>
            <CLink href="/statuts.pdf">Statuts</CLink><br/>
            <CLink href="/rgpd.pdf">Mentions legales & RGPD</CLink>
          </div>
          <div>
            <Text fontWeight={700}>Contact</Text>
            <Text fontSize="sm">contact@retrobus-essonne.fr</Text>
          </div>
        </SimpleGrid>
        <Text mt={6} fontSize="xs" opacity={0.6}>Â© {new Date().getFullYear()} RetroBus Essonne - Tous droits reserves.</Text>
      </Container>
    </footer>
  );
}
