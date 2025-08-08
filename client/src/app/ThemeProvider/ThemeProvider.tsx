import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";
import { ThemeProvider as ColorModeProvider } from "next-themes"; // For color mode detection (light/dark mode)

const config = defineConfig({
  theme: {
    tokens: {
      colors: {},
    },
  },
});

const system = createSystem(defaultConfig, config);

interface ThemeProviderProps {
  children: React.ReactNode;
}
const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <ColorModeProvider attribute="class" disableTransitionOnChange>
    <ChakraProvider value={system}>{children}</ChakraProvider>
  </ColorModeProvider>
);

export default ThemeProvider;
