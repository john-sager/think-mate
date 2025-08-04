type DecisionStatus = "decidedFor" | "decidedAgainst" | "undecided";

interface Decision {
  id: string;
  title: string;
  description: string;
  status: DecisionStatus;
  score: number;
}
