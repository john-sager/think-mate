import { Box, Heading } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import DecisionList from "./components/DecisionList/DecisionList";

function App() {
  const { data: decisions } = useQuery<Decision[]>({
    queryKey: ["decisions"],
  });
  return (
    <Box maxW="1280px" py="4" px="16">
      <Heading size="2xl" textAlign="center" mb="8">
        ThinkMate
      </Heading>

      <DecisionList decisions={decisions ?? []} />
    </Box>
  );
}

export default App;
