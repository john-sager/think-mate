import { useMutation, useQuery } from "@tanstack/react-query";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import DecisionList from "../../components/DecisionList/DecisionList";

const Decisions = () => {
  const { data: decisions } = useQuery<Decision[]>({
    queryKey: ["decisions"],
  });
  const { mutate: createDecision } = useMutation({
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
      <Flex mb={4} justifyContent="center" alignItems="center">
        <Text>Here are your decisions</Text>
        <Button
          ml={4}
          size="xs"
          colorPalette="blue"
          onClick={() => createDecision("New Decision")}
        >
          Add new decision
        </Button>
      </Flex>
      <Flex justifyContent="center" flexDir="row">
        <DecisionList decisions={decisions ?? []} />
      </Flex>
    </Box>
  );
};

export default Decisions;
