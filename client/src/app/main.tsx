import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ThemeProvider from "./ThemeProvider/ThemeProvider.tsx";
import QueryProvider from "./QueryProvider/QueryProvider.tsx";
import { AppRouter } from "./AppRouter.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <QueryProvider>
        <AppRouter />
      </QueryProvider>
    </ThemeProvider>
  </StrictMode>
);
