// src/theme.js
import { createSystem, defaultConfig } from "@chakra-ui/react";

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: "Montserrat, system-ui, sans-serif" },
        body: { value: "Montserrat, system-ui, sans-serif" },
      },
    },
  },
});

export default system;
