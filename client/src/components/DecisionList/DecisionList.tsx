import { For, Box, Text, Flex, Button } from "@chakra-ui/react";
import DecisionCard from "../DecisionCard/DecisionCard";

interface DecisionListProps {
  decisions: Decision[];
}

const DecisionList = ({ decisions }: DecisionListProps) => {
  return (
    <Box>
      <Flex mb={4} justifyContent="flex-start" alignItems="center">
        <Text>Here are your decisions</Text>
        <Button ml={4} size="xs" colorPalette="blue">
          Add new decision
        </Button>
      </Flex>
      <For each={decisions}>
        {(decision) => (
          <Box mb={4} key={decision.id}>
            <DecisionCard decision={decision} />
          </Box>
        )}
      </For>
    </Box>
  );
};

export default DecisionList;
