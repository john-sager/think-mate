type DecisionStatus = "decidedFor" | "decidedAgainst" | "undecided";

interface Decision {
  id: string;
  title: string;
  description: string;
  status: DecisionStatus;
  score: number;
}

type FactorType = "pro" | "con";

interface Factor {
  id: string;
  name: string;
  description: string;
  type: FactorType;
  score: number;
}

type CreateDecisionDto = Pick<Decision, "title">;
type UpdateDecisionDto = Omit<Decision, "id">;
