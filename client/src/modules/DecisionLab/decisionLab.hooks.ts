import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useUpdateDecision = (id: string) => {
  const { mutate, ...mutation } = useMutation({
    mutationFn: (updatedDecision: UpdateDecisionDto) => {
      return fetch(`http://localhost:3000/decisions/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedDecision),
        headers: new Headers({ "Content-Type": "application/json" }),
      });
    },
  });

  return { updateDecision: mutate, ...mutation };
};

export const useQueryDecisionById = (id: string) => {
  return useQuery<Decision | null>({
    queryKey: ["decisions", id],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3000/decisions/${id}`);
      const data = await response.json();
      return data;
    },
  });
};

export const useCreateFactor = (decisionId: string) => {
  const queryClient = useQueryClient();
  const { mutate: createFactor, ...rest } = useMutation({
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

  return { createFactor, ...rest };
};
