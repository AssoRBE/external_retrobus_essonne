param(
  [string]$ProjectName = "rbe-site-vitrine",
  [switch]$Install,
  [switch]$Run,
  [switch]$Force
)

function Write-TextFile {
  param([string]$Path, [string]$Content)
  $dir = Split-Path -Parent $Path
  if ($dir -and -not (Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
  Set-Content -Path $Path -Value $Content -Encoding UTF8
}

# --- Prep ---
$Root = Join-Path (Get-Location) $ProjectName
if (Test-Path $Root) {
  if (-not $Force) {
    throw "Folder '$ProjectName' already exists. Re-run with -Force to overwrite."
  } else {
    if ($Root -match '^[A-Za-z]:\\$') { throw "Safety stop: refusing to delete drive root." }
    Remove-Item -Recurse -Force $Root
  }
}
New-Item -ItemType Directory -Force -Path $Root | Out-Null

# --- package.json ---
$packageJson = @'
{
  "name": "rbe-site-vitrine",
  "private": true,
  "version": "0.0.1",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@chakra-ui/icons": "^2.2.1",
    "@chakra-ui/react": "^2.8.2",
    "@emotion/react": "^11.13.0",
    "@emotion/styled": "^11.13.0",
    "framer-motion": "^11.0.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-helmet-async": "^2.0.5",
    "react-router-dom": "^6.26.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "vite": "^5.4.0"
  }
}
'@
Write-TextFile (Join-Path $Root "package.json") $packageJson

# --- vite.config.js ---
$viteCfg = @'
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({ plugins: [react()] });
'@
Write-TextFile (Join-Path $Root "vite.config.js") $viteCfg

# --- index.html ---
$indexHtml = @'
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
    <title>RetroBus Essonne — Association</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
'@
Write-TextFile (Join-Path $Root "index.html") $indexHtml

# --- src/theme.js ---
$themeJs = @'
import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    anthracite: "#131416",
    anthracite2: "#1A1C20",
    yellow: "#F6C445",
    white: "#FFFFFF"
  }
};

const styles = {
  global: {
    "html, body, #root": { height: "100%" },
    body: {
      bg: "brand.anthracite",
      color: "white",
      fontFamily: "Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Apple Color Emoji, Segoe UI Emoji"
    },
    h1: { textAlign: "center", fontWeight: 700 }
  }
};

const components = {
  Button: { baseStyle: { rounded: "xl", fontWeight: 600 } },
  Container: { baseStyle: { maxW: "6xl", px: 4 } }
};

const config = { initialColorMode: "dark", useSystemColorMode: false };

export default extendTheme({ colors, styles, components, config });
'@
Write-TextFile (Join-Path $Root "src\theme.js") $themeJs

# --- src/styles.css ---
$stylesCss = @'
:root{
  --anthracite:#131416;
  --anthracite-2:#1A1C20;
}
.header-wrap{ position: sticky; top:0; z-index:100; }
.header-top{ background: var(--anthracite); border-bottom: 1px solid rgba(255,255,255,.06); }
.header-menu{ background:#fff; color:#111; }
.header-menu a{ color:#111; text-decoration:none; font-weight:600; }
.header-logo{ height:72px; display:flex; align-items:center; justify-content:center; }
.header-logo img{ height:56px; object-fit:contain; }
.card{ background: var(--anthracite-2); border-radius:16px; padding:18px; box-shadow:0 8px 32px rgba(0,0,0,.25); }
.section{ padding:36px 0; }
.site-footer{ background: var(--anthracite-2); padding:28px 0; margin-top:48px; }
'@
Write-TextFile (Join-Path $Root "src\styles.css") $stylesCss

# --- src/main.jsx ---
$mainJsx = @'
import React from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme";
import App from "./App";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </HelmetProvider>
  </React.StrictMode>
);
'@
Write-TextFile (Join-Path $Root "src\main.jsx") $mainJsx

# --- src/App.jsx ---
$appJsx = @'
import { Routes, Route } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Vehicles from "./pages/Vehicles";
import Events from "./pages/Events";
import Booking from "./pages/Booking";
import Photos from "./pages/Photos";
import About from "./pages/About";
import Donate from "./pages/Donate";
import Shop from "./pages/Shop";

export default function App(){
  return (
    <>
      <Header />
      <main>
        <Container as="section" className="section">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/vehicules" element={<Vehicles/>} />
            <Route path="/evenements" element={<Events/>} />
            <Route path="/reserver" element={<Booking/>} />
            <Route path="/photos" element={<Photos/>} />
            <Route path="/a-propos" element={<About/>} />
            <Route path="/don-adhesion" element={<Donate/>} />
            <Route path="/boutique" element={<Shop/>} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}
'@
Write-TextFile (Join-Path $Root "src\App.jsx") $appJsx

# --- src/components/Header.jsx ---
$headerJsx = @'
import { Link, NavLink } from "react-router-dom";
import { Box, Container, HStack, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Logo from "/src/assets/rbe_logo.svg";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/vehicules", label: "Nos vehicules" },
  { to: "/evenements", label: "Sorties & evenements" },
  { to: "/reserver", label: "Reserver" },
  { to: "/photos", label: "Photos" },
  { to: "/don-adhesion", label: "Adhesion / Don" },
  { to: "/boutique", label: "Boutique" },
  { to: "/a-propos", label: "A propos & Contact" }
];

export default function Header(){
  return (
    <div className="header-wrap">
      <Box className="header-top">
        <Container>
          <div className="header-logo">
            <Link to="/" aria-label="Retour a l'accueil">
              <motion.img src={Logo} alt="RetroBus Essonne" initial={{ opacity:0, y:-8 }} animate={{ opacity:1, y:0 }} />
            </Link>
          </div>
        </Container>
      </Box>
      <Box className="header-menu">
        <Container>
          <Flex as="nav" align="center" justify="center" gap={6} py={3} wrap="wrap">
            {nav.map(i => (
              <NavLink key={i.to} to={i.to} end={i.to==='/' }>
                {({ isActive }) => (
                  <HStack spacing={2} px={2} py={1} borderBottom={isActive? "3px solid #111" : "3px solid transparent"}>
                    <span>{i.label}</span>
                  </HStack>
                )}
              </NavLink>
            ))}
          </Flex>
        </Container>
      </Box>
    </div>
  );
}
'@
Write-TextFile (Join-Path $Root "src\components/Header.jsx") $headerJsx

# --- src/components/Footer.jsx ---
$footerJsx = @'
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
        <Text mt={6} fontSize="xs" opacity={0.6}>© {new Date().getFullYear()} RetroBus Essonne - Tous droits reserves.</Text>
      </Container>
    </footer>
  );
}
'@
Write-TextFile (Join-Path $Root "src\components/Footer.jsx") $footerJsx

# --- pages (Home, Vehicles, Events, Booking, Photos, Donate, Shop, About) ---
$homeJsx = @'
import { Helmet } from "react-helmet-async";
import { Box, Button, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";

export default function Home(){
  return (
    <>
      <Helmet>
        <title>RetroBus Essonne — Preserver. Partager. Transmettre.</title>
        <meta name="description" content="Association consacree au patrimoine des transports de l Essonne." />
      </Helmet>

      <Container maxW="7xl" px={0}>
        <Box className="card" p={8} textAlign="center">
          <Heading as="h1" size="xl" mb={3}>RetroBus Essonne</Heading>
          <Text fontSize="lg" opacity={0.9}>
            Preserver. Partager. Transmettre.
          </Text>
          <Button as="a" href="/reserver" mt={6} size="lg" colorScheme="yellow">Reserver une sortie</Button>
        </Box>

        <SimpleGrid columns={{ base:1, md:3 }} spacing={6} mt={6}>
          {[
            { t:"Nos vehicules", d:"Citaro 1, Setra S415 NF, GX 327/427 BHNS...", href:"/vehicules" },
            { t:"Sorties & evenements", d:"Paris by RBE, Paris by Night...", href:"/evenements" },
            { t:"Adhesion / Don", d:"Soutenir nos restaurations.", href:"/don-adhesion" }
          ].map((c,i)=> (
            <Box key={i} className="card" p={6}>
              <Heading as="h3" size="md" textAlign="center">{c.t}</Heading>
              <Text mt={2} opacity={0.9}>{c.d}</Text>
              <Button as="a" href={c.href} mt={4} variant="outline">En savoir plus</Button>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}
'@
Write-TextFile (Join-Path $Root "src\pages\Home.jsx") $homeJsx

$vehiclesJsx = @'
import { Helmet } from "react-helmet-async";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

const data = [
  { id:"FG-920-RE", title:"Mercedes-Benz Citaro 1 (2001 - Euro 2)", img:"/assets/citaro_fg920re.jpg" },
  { id:"231620", title:"Setra S415 NF (2008)", img:"/assets/setra_231620.jpg" },
  { id:"GX427", title:"Irisbus/Iveco GX 427 BHNS", img:"/assets/gx427.jpg" }
];

export default function Vehicles(){
  return (
    <>
      <Helmet><title>Nos vehicules — RBE</title></Helmet>
      <Heading as="h1">Nos vehicules</Heading>
      <SimpleGrid columns={{ base:1, md:3 }} spacing={6} mt={6}>
        {data.map(v => (
          <Box key={v.id} className="card">
            <img src={v.img} alt={v.title} style={{ width:"100%", borderRadius:12, aspectRatio:"4/3", objectFit:"cover" }} />
            <Heading as="h3" size="md" mt={3} textAlign="center">{v.title}</Heading>
            <Text opacity={0.8} textAlign="center">Parc {v.id}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
}
'@
Write-TextFile (Join-Path $Root "src\pages\Vehicles.jsx") $vehiclesJsx

$eventsJsx = @'
import { Helmet } from "react-helmet-async";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Events(){
  return (
    <>
      <Helmet><title>Sorties & evenements — RBE</title></Helmet>
      <Heading as="h1">Sorties & evenements</Heading>
      <Box className="card" mt={6}>
        <Text>Prochaines dates a venir. Pour privatiser un vehicule, onglet Reserver.</Text>
      </Box>
    </>
  );
}
'@
Write-TextFile (Join-Path $Root "src\pages\Events.jsx") $eventsJsx

$bookingJsx = @'
import { Helmet } from "react-helmet-async";
import { Box, Button, FormControl, FormLabel, Heading, Input, Select, Textarea } from "@chakra-ui/react";

export default function Booking(){
  return (
    <>
      <Helmet><title>Reserver — RBE</title></Helmet>
      <Heading as="h1">Reserver une prestation</Heading>
      <Box className="card" mt={6} as="form" onSubmit={e=>e.preventDefault()}>
        <FormControl isRequired mb={4}>
          <FormLabel>Nom / Organisation</FormLabel>
          <Input placeholder="Votre nom ou organisation"/>
        </FormControl>
        <FormControl isRequired mb={4}>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="vous@domaine.fr"/>
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Choix du vehicule</FormLabel>
          <Select placeholder="Selectionner">
            <option>Mercedes Citaro 1</option>
            <option>Setra S415 NF</option>
            <option>GX 427 BHNS</option>
          </Select>
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Date souhaitee</FormLabel>
          <Input type="date"/>
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Details</FormLabel>
          <Textarea rows={5} placeholder="Lieu, horaires, effectif, etc."/>
        </FormControl>
        <Button type="submit" colorScheme="yellow">Demander un devis</Button>
      </Box>
    </>
  );
}
'@
Write-TextFile (Join-Path $Root "src\pages\Booking.jsx") $bookingJsx

$photosJsx = @'
import { Helmet } from "react-helmet-async";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";

export default function Photos(){
  return (
    <>
      <Helmet><title>Photos — RBE</title></Helmet>
      <Heading as="h1">Photos</Heading>
      <SimpleGrid columns={{ base:2, md:4 }} spacing={6} mt={6}>
        {[1,2,3,4,5,6,7,8].map(i => (
          <Box key={i} className="card" p={0}>
            <img src={`/assets/photos/p${i}.jpg`} alt={`Photo ${i}`} style={{ width:"100%", display:"block", borderRadius:12 }} />
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
}
'@
Write-TextFile (Join-Path $Root "src\pages\Photos.jsx") $photosJsx

$donateJsx = @'
import { Helmet } from "react-helmet-async";
import { Box, Heading, Text, Button } from "@chakra-ui/react";

export default function Donate(){
  return (
    <>
      <Helmet><title>Adhesion / Don — RBE</title></Helmet>
      <Heading as="h1">Adhesion / Don</Heading>
      <Box className="card" mt={6}>
        <Text>Adherer a l association ou faire un don.</Text>
        <Button as="a" href="https://www.helloasso.com/" target="_blank" rel="noreferrer" mt={4} colorScheme="yellow">HelloAsso</Button>
      </Box>
    </>
  );
}
'@
Write-TextFile (Join-Path $Root "src\pages\Donate.jsx") $donateJsx

$shopJsx = @'
import { Helmet } from "react-helmet-async";
import { Box, Heading, SimpleGrid, Text, Button } from "@chakra-ui/react";

export default function Shop(){
  return (
    <>
      <Helmet><title>Boutique — RBE</title></Helmet>
      <Heading as="h1">Boutique</Heading>
      <SimpleGrid columns={{ base:1, md:3 }} spacing={6} mt={6}>
        {[
          { n:"T-shirt RetroMerch", p:"20,00 EUR" },
          { n:"Sticker RBE", p:"2,50 EUR" },
          { n:"Affiche GX 427", p:"9,90 EUR" }
        ].map((it,i)=> (
          <Box key={i} className="card">
            <Heading as="h3" size="md" textAlign="center">{it.n}</Heading>
            <Text mt={2} textAlign="center" opacity={0.85}>{it.p}</Text>
            <Button as="a" href="#" mt={4} variant="outline">Ajouter au panier</Button>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
}
'@
Write-TextFile (Join-Path $Root "src\pages\Shop.jsx") $shopJsx

$aboutJsx = @'
import { Helmet } from "react-helmet-async";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function About(){
  return (
    <>
      <Helmet><title>A propos & Contact — RBE</title></Helmet>
      <Heading as="h1">A propos & Contact</Heading>
      <Box className="card" mt={6}>
        <Text mb={3}>Association loi 1901 basee en Essonne.</Text>
        <Text>Email : contact@retrobus-essonne.fr</Text>
        <Text>Instagram : @tc_essonnes</Text>
      </Box>
    </>
  );
}
'@
Write-TextFile (Join-Path $Root "src\pages\About.jsx") $aboutJsx

# --- logo placeholder ---
$logoSvg = @'
<svg xmlns="http://www.w3.org/2000/svg" width="480" height="120" viewBox="0 0 480 120">
  <rect width="100%" height="100%" fill="#1A1C20"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#F6C445" font-family="Montserrat, Arial" font-size="36" font-weight="700">
    RetroBus Essonne
  </text>
</svg>
'@
Write-TextFile (Join-Path $Root "src\assets\rbe_logo.svg") $logoSvg

# --- public folders ---
New-Item -ItemType Directory -Force -Path (Join-Path $Root "public\assets\photos") | Out-Null
"Put your images here (citaro_fg920re.jpg, setra_231620.jpg, gx427.jpg)" | Set-Content -Path (Join-Path $Root "public\assets\README.txt") -Encoding UTF8
1..8 | ForEach-Object {
  "placeholder p$_.jpg (replace with a real photo)" | Set-Content -Path (Join-Path $Root ("public\assets\photos\p{0}.jpg" -f $_)) -Encoding UTF8
}

# --- README ---
$readme = @'
RetroBus Essonne — Site vitrine (React + Vite + Chakra)
Commands:
  npm i
  npm run dev
Open http://localhost:5173
'@
Write-TextFile (Join-Path $Root "README.md") $readme

Push-Location $Root
try {
  if ($Install) {
    if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
      Write-Host "npm not found. Install Node.js then re-run with -Install." -ForegroundColor Yellow
    } else {
      Write-Host "Installing dependencies..." -ForegroundColor Cyan
      npm install
    }
  }
  if ($Run) {
    if (Get-Command npm -ErrorAction SilentlyContinue) {
      Write-Host "Starting dev server..." -ForegroundColor Green
      npm run dev
    } else {
      Write-Host "npm not found, cannot run dev server." -ForegroundColor Yellow
    }
  }
}
finally {
  Pop-Location
}

Write-Host "Project created in '$ProjectName'." -ForegroundColor Green
Write-Host "Next: cd $ProjectName ; npm i ; npm run dev  (or re-run script with -Install -Run)" -ForegroundColor Gray
