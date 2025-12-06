import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";
// import { tanstackRouter } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // tanstackRouter({
    //   target: "react",
    //   autoCodeSplitting: true,
    //   enableRouteGeneration: false,
    // }),
    react(),
  ],

  resolve: {
    alias: {
      "@/client": path.resolve(__dirname, "./src"),
    },
  },
});
