import { useMutation } from "@tanstack/react-query";

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
