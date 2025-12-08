import { For, VStack } from "@chakra-ui/react";
import DecisionCard from "../DecisionCard/DecisionCard";

interface DecisionListProps {
  decisions: Decision[];
}

export const DecisionList = ({ decisions }: DecisionListProps) => (
  <VStack gap={4} w={320}>
    <For each={decisions}>
      {(decision) => <DecisionCard decision={decision} key={decision.id} />}
    </For>
  </VStack>
);
