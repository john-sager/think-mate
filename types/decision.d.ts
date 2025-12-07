type DecisionStatus = "decidedFor" | "decidedAgainst" | "undecided";

interface Decision {
  id: string;
  title: string;
  description: string;
  status: DecisionStatus;
  score: number;
}

interface Factor {
  id: string;
  name: string;
  description: string;
  type: "pro" | "con";
  score: number;
}

type CreateDecisionDto = Pick<Decision, "title">;
type UpdateDecisionDto = Omit<Decision, "id">;
