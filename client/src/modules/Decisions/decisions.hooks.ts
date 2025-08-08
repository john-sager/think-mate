import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetDecisions = () => {
  const { data, ...rest } = useQuery<Decision[]>({
    queryKey: ["decisions"],
  });

  return { decisions: data, ...rest };
};

export const useCreateDecision = () => {
  const { mutate, ...mutation } = useMutation({
    mutationFn: (newTitle: string) => {
      return fetch(`http://localhost:3000/decisions`, {
        method: "POST",
        body: JSON.stringify({ title: newTitle }),
        headers: new Headers({ "Content-Type": "application/json" }),
      });
    },
  });

  return { createDecision: mutate, ...mutation };
};
