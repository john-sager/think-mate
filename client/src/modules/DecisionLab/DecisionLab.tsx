import { useQuery } from "@tanstack/react-query";
import { decisionLabRoute } from "../../app/routes";

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

  return (
    <div>
      Decision {decisionId} {JSON.stringify(data, null, 2)}
    </div>
  );
};

export default DecisionLab;
