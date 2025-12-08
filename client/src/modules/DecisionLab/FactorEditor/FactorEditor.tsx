import { useEffect, useMemo, useState } from "react";
import { filterfy } from "@/client/utils";
import { Flex, For, VStack } from "@chakra-ui/react";
import { FactorCard } from "../FactorCard/FactorCard";
import { CreateFactorButton } from "../CreateFactorButton/CreateFactorButton";

export const FactorEditor = ({
  onScoreChange,
}: {
  onScoreChange: (total: number) => void;
}) => {
  const [factors, setFactors] = useState<Factor[]>([]);

  const [pros, cons] = useMemo(
    () => filterfy(factors, (f) => f.type === "pro"),
    [factors]
  );

  useEffect(() => {
    const newTotal = factors.reduce(
      (acc, factor) =>
        (acc += factor.type === "pro" ? factor.score : factor.score * -1),
      0
    );
    onScoreChange(newTotal);
  }, [factors, onScoreChange]);

  const handleSubmit = (title: string, factorType: FactorType) => {
    if (title) {
      const newFactor: Factor = {
        id: "123",
        name: title,
        description: "test description",
        type: factorType,
        score: 1,
      };
      setFactors((prev) => [...prev, newFactor]);
    }
  };

  return (
    <Flex justifyContent="space-around">
      <VStack gap={4}>
        <CreateFactorButton factorType="pro" onSubmit={handleSubmit} />
        <For each={pros}>{(p) => <FactorCard factor={p} key={p.id} />}</For>
      </VStack>
      <VStack gap={4}>
        <CreateFactorButton factorType="con" onSubmit={handleSubmit} />
        <For each={cons}>{(c) => <FactorCard factor={c} key={c.id} />}</For>
      </VStack>
    </Flex>
  );
};
