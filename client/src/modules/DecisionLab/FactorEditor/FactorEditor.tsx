import { useEffect, useMemo } from "react";
import { filterfy } from "@/client/utils";
import { Flex, For, VStack } from "@chakra-ui/react";
import { FactorCard } from "../FactorCard/FactorCard";
import { CreateFactorButton } from "../CreateFactorButton/CreateFactorButton";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface Props {
  factors?: Factor[];
  onScoreChange: (total: number) => void;
  decisionId: string;
}

export const FactorEditor = ({ factors, onScoreChange, decisionId }: Props) => {
  const queryClient = useQueryClient();

  const { mutate: createFactor } = useMutation({
    mutationFn: (newFactor: CreateFactorDto) => {
      return fetch(
        `http://localhost:3000/decisions/${decisionId}/createFactor`,
        {
          method: "PUT",
          body: JSON.stringify(newFactor),
          headers: new Headers({ "Content-Type": "application/json" }),
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["decision", decisionId] });
    },
  });

  const [pros, cons] = useMemo(
    () => (factors ? filterfy(factors, (f) => f.type === "pro") : [[], []]),
    [factors]
  );

  useEffect(() => {
    const newTotal = factors
      ? factors.reduce(
          (acc, factor) =>
            (acc += factor.type === "pro" ? factor.score : factor.score * -1),
          0
        )
      : 0;
    onScoreChange(newTotal);
  }, [factors, onScoreChange]);

  const handleSubmit = (title: string, factorType: FactorType) => {
    if (title) {
      const newFactor: CreateFactorDto = {
        title,
        type: factorType,
      };
      createFactor(newFactor);
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
