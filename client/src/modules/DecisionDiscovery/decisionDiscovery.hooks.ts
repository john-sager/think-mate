import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { API } from "@/client/envVars";

export const useQueryDecisions = () => {
  const { data, ...rest } = useQuery<Decision[]>({
    queryKey: ["decisions"],
  });

  return { decisions: data, ...rest };
};

export const useCreateDecision = () => {
  const queryClient = useQueryClient();

  const { mutate, ...mutation } = useMutation({
    mutationFn: (newDecision: CreateDecisionDto) => {
      return fetch(`${API}/decisions`, {
        method: "POST",
        body: JSON.stringify(newDecision),
        headers: new Headers({ "Content-Type": "application/json" }),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["decisions"] });
    },
  });

  return { createDecision: mutate, ...mutation };
};
