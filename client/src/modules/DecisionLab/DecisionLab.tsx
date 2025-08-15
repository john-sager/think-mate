import { useQuery } from "@tanstack/react-query";
import { decisionLabRoute } from "../../app/routes";
import DecisionCard from "../../components/DecisionCard/DecisionCard";

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

  return <DecisionCard decision={data} />;
};

export default DecisionLab;
