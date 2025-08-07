import { For, Box } from "@chakra-ui/react";
import DecisionCard from "../DecisionCard/DecisionCard";

interface DecisionListProps {
  decisions: Decision[];
}

const DecisionList = ({ decisions }: DecisionListProps) => (
  <Box>
    <For each={decisions}>
      {(decision) => (
        <Box mb={4} key={decision.id}>
          <DecisionCard decision={decision} />
        </Box>
      )}
    </For>
  </Box>
);

export default DecisionList;
