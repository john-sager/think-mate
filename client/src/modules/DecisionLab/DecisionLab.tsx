import { useState } from "react";

import { decisionLabRoute } from "@/client/app/routes";

import { DecisionEditor } from "./DecisionEditor/DecisionEditor";
import { FactorEditor } from "./FactorEditor/FactorEditor";
import { useQueryDecisionById } from "./decisionLab.hooks";

const DecisionLab = () => {
  const { decisionId } = decisionLabRoute.useParams();
  const [totalScore, setTotalScore] = useState<number>(0);

  const { data: decision } = useQueryDecisionById(decisionId);

  if (!decision) return null;

  return (
    <>
      <DecisionEditor decision={decision} totalScore={totalScore} />
      <FactorEditor
        onScoreChange={(newTotal) => setTotalScore(newTotal)}
        factors={decision.factors}
        decisionId={decisionId}
      />
    </>
  );
};

export default DecisionLab;
