import { Card } from "@/client/components/Card/Card";
import { LinkButton } from "@/client/components/LinkButton/LinkButton";
import { CardDescription } from "@chakra-ui/react";

const decisionStatusMap: Record<DecisionStatus, string> = {
  decidedFor: "decided in favor of",
  decidedAgainst: "decided against",
  undecided: "undecided",
};

interface DecisionCardProps {
  decision: Decision;
}

const DecisionCard = ({ decision }: DecisionCardProps) => {
  const { title, status, score, id } = decision;

  const bodyText = `Currently ${decisionStatusMap[status]}, with a decision score of ${score}`;

  return (
    <Card
      title={title}
      footer={
        <LinkButton
          to="/decision/$decisionId"
          params={{ decisionId: id }}
          buttonText={
            status === "undecided" ? "Help me decide" : "View details"
          }
        />
      }
    >
      <CardDescription>{bodyText}</CardDescription>
    </Card>
  );
};

export default DecisionCard;
