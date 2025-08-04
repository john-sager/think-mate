import { Box, Heading } from "@chakra-ui/react";
import DecisionList from "./components/DecisionList/DecisionList";

const decisions: Decision[] = [
  {
    id: "1",
    title: "Move to Seattle",
    description: "Considering a move to Seattle for better job opportunities.",
    status: "undecided",
    score: 0,
  },
  {
    id: "2",
    title: "Buy a new car",
    description: "Thinking about purchasing a new electric vehicle.",
    status: "decidedFor",
    score: 85,
  },
  {
    id: "3",
    title: "Start a new hobby",
    description: "Exploring options for a new hobby to pursue in my free time.",
    status: "decidedAgainst",
    score: -20,
  },
];

function App() {
  return (
    <Box maxW="1280px" py="4" px="16">
      <Heading size="2xl" textAlign="center" mb="8">
        ThinkMate
      </Heading>

      <DecisionList decisions={decisions} />
    </Box>
  );
}

export default App;
