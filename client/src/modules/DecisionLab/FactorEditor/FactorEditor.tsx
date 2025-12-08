import { useMemo, useState } from "react";
import { FactorCard } from "../FactorCard/FactorCard";
import { filterfy } from "@/client/utils";
import { Box, Button, Flex } from "@chakra-ui/react";
import { CreateFactorButton } from "../CreateFactorButton/CreateFactorButton";

export const FactorEditor = ({
  onCountChange,
}: {
  onCountChange: (total: number) => void;
}) => {
  const [factors, setFactors] = useState<Factor[]>([
    {
      id: "1",
      name: "hello",
      description: "description here",
      type: "pro",
      score: 3,
    },
    {
      id: "2",
      name: "hello",
      description: "description here",
      type: "con",
      score: 3,
    },
    {
      id: "3",
      name: "test",
      description: "description here",
      type: "pro",
      score: 5,
    },
  ]);

  const [pros, cons] = useMemo(
    () => filterfy(factors, (f) => f.type === "pro"),
    [factors]
  );

  const handleCountChange = (newCount: number) => {
    onCountChange(newCount);
  };

  return (
    <Flex justifyContent="space-around">
      <Box>
        <CreateFactorButton factorType="pro" onSubmit={() => null} />
        {pros.map((p) => (
          <FactorCard factor={p} />
        ))}
      </Box>
      <Box>
        <CreateFactorButton factorType="con" onSubmit={() => null} />
        {cons.map((c) => (
          <FactorCard factor={c} />
        ))}
      </Box>
    </Flex>
  );
};
