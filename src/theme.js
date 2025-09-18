// src/theme/index.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `"Nimbus Sans T OT", Montserrat, system-ui, sans-serif`,
    body: `"Nimbus Sans T OT", Montserrat, system-ui, sans-serif`,
  },
  colors: {
    rbe: { 500: "#e40045" },
  },
  components: {
    Container: {
      baseStyle: { px: 4 },
      sizes: { xl: { maxW: "1200px" } },
      defaultProps: { size: "xl" },
    },
    Button: {
      variants: {
        brand: {
          bg: "rbe.500",
          color: "white",
          _hover: { filter: "brightness(0.96)" },
        },
        outlineBrand: {
          border: "1px solid",
          borderColor: "rbe.500",
          color: "rbe.500",
          _hover: { bg: "blackAlpha.50" },
        },
      },
    },
    Heading: {
      baseStyle: { letterSpacing: "0.2px" },
    },
    Link: {
      baseStyle: { color: "rbe.500", _hover: { textDecoration: "underline" } },
    },
  },
});

export default theme;
