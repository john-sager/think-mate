import { Box, Flex, Text } from "@chakra-ui/react";
import { useCreateDecision, useGetDecisions } from "./decisions.hooks";
import { DecisionList } from "./DecisionList/DecisionList";
import { CreateDecisionButton } from "./CreateDecisionButton/CreateDecisionButton";

const Decisions = () => {
  const { decisions } = useGetDecisions();
  const { createDecision } = useCreateDecision();

  return (
    <Box>
      <Flex mb={4} justifyContent="center" alignItems="center">
        <Text mr={4}>Here are your decisions</Text>

        <CreateDecisionButton
          onSubmit={(newTitle) => createDecision({ title: newTitle })}
        />
      </Flex>
      <Flex justifyContent="center">
        <DecisionList decisions={decisions ?? []} />
      </Flex>
    </Box>
  );
};

export default Decisions;
