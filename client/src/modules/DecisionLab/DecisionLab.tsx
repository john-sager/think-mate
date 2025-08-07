import { decisionLabRoute } from "../../routes";

const DecisionLab = () => {
  const { decisionId } = decisionLabRoute.useParams();
  return <div>Decision {decisionId}</div>;
};

export default DecisionLab;
