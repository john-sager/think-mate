import { Box, Button, Flex, Text } from "@chakra-ui/react";
import DecisionList from "../../components/DecisionList/DecisionList";

import { useCreateDecision, useGetDecisions } from "./decisions.hooks";

const Decisions = () => {
  const { decisions } = useGetDecisions();
  const { createDecision } = useCreateDecision();

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
