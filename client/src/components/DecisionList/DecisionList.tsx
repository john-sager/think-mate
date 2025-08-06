import { For, Box, Text, Flex, Button } from "@chakra-ui/react";
import DecisionCard from "../DecisionCard/DecisionCard";
import { useMutation } from "@tanstack/react-query";

interface DecisionListProps {
  decisions: Decision[];
}

const DecisionList = ({ decisions }: DecisionListProps) => {
  const mutation = useMutation({
    mutationFn: (newTitle: string) => {
      return fetch(`http://localhost:3000/decisions`, {
        method: "POST",
        body: JSON.stringify({ title: newTitle }),
        headers: new Headers({ "Content-Type": "application/json" }),
      });
    },
  });

  return (
    <Box>
      <Flex mb={4} justifyContent="flex-start" alignItems="center">
        <Text>Here are your decisions</Text>
        <Button
          ml={4}
          size="xs"
          colorPalette="blue"
          onClick={() => mutation.mutate("New Decision")}
        >
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
