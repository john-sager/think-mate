import { useQuery } from "@tanstack/react-query";

import { decisionLabRoute } from "@/client/app/routes";

import { DecisionEditor } from "./DecisionEditor/DecisionEditor";
import { FactorEditor } from "./FactorEditor/FactorEditor";

const DecisionLab = () => {
  const { decisionId } = decisionLabRoute.useParams();

  const { data } = useQuery<Decision | null>({
    queryKey: ["decisions", decisionId],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3000/decisions/${decisionId}`
      );
      const data = await response.json();
      return data;
    },
  });

  if (!data) return null;

  return (
    <>
      <DecisionEditor decision={data} />
      <FactorEditor onCountChange={() => null} />
    </>
  );
};

export default DecisionLab;
