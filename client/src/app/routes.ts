import { createRootRoute, createRoute } from "@tanstack/react-router";

import DecisionDiscovery from "../modules/DecisionDiscovery/DecisionDiscovery";
import DecisionLab from "../modules/DecisionLab/DecisionLab";
import AppLayout from "./AppLayout";

export const rootRoute = createRootRoute({
  component: AppLayout,
});

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: DecisionDiscovery,
});

export const decisionLabRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "decision/$decisionId",
  component: DecisionLab,
});
