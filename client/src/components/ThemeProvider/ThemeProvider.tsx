import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";
import { ColorModeProvider } from "./ColorModeProvider";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {},
    },
  },
});

const system = createSystem(defaultConfig, config);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ColorModeProvider>
      <ChakraProvider value={system}>{children}</ChakraProvider>
    </ColorModeProvider>
  );
}
