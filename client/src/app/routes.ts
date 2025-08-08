import { createRootRoute, createRoute } from "@tanstack/react-router";

import AppLayout from "./AppLayout";
import Decisions from "../modules/Decisions/Decisions";
import DecisionLab from "../modules/DecisionLab/DecisionLab";

export const rootRoute = createRootRoute({
  component: AppLayout,
});

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Decisions,
});

export const decisionLabRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/decision/$decisionId",
  component: DecisionLab,
});
