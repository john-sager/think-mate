import { decisionLabRoute } from "../../app/routes";

const DecisionLab = () => {
  const { decisionId } = decisionLabRoute.useParams();
  return <div>Decision {decisionId}</div>;
};

export default DecisionLab;
