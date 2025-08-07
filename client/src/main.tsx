import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ThemeProvider from "./components/ThemeProvider/ThemeProvider.tsx";
import QueryProvider from "./components/QueryProvider/QueryProvider.tsx";
import { AppRouter } from "./Router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <QueryProvider>
        <AppRouter />
      </QueryProvider>
    </ThemeProvider>
  </StrictMode>
);
