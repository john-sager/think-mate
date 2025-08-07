import { createRouter, RouterProvider } from "@tanstack/react-router";
import * as routes from "./routes";

const { rootRoute, ...otherRoutes } = routes;

const routeTree = rootRoute.addChildren(otherRoutes);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export const AppRouter = () => <RouterProvider router={router} />;
