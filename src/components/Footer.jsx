import { Container, SimpleGrid, Text, Link as CLink } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} style={{ flex: 1 }}>
            <div>
              <Text fontWeight={700}>RetroBus Essonne</Text>
              <Text fontSize="sm" opacity={0.8}>Patrimoine des transports en Essonne.</Text>
            </div>
            <div>
              <Text fontWeight={700}>Liens utiles</Text>
              <CLink href="/statuts.pdf">Statuts</CLink><br />
              <CLink href="/rgpd.pdf">Mentions légales & RGPD</CLink>
            </div>
            <div>
              <Text fontWeight={700}>Contact</Text>
              <Text fontSize="sm">association.rbe@gmail.com</Text>
            </div>
          </SimpleGrid>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">
              <FaTiktok />
            </a>
          </div>
        </div>
        <Text mt={6} fontSize="xs" opacity={0.6}>
          Â© {new Date().getFullYear()} RetroBus Essonne - Tous droits réservés.
        </Text>
      </Container>
    </footer>
  );
}
