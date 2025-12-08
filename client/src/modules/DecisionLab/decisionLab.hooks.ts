import { useMutation, useQuery } from "@tanstack/react-query";

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
    queryKey: ["decision", id],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3000/decisions/${id}`);
      const data = await response.json();
      return data;
    },
  });
};
