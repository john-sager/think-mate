import { Button, Card } from "@chakra-ui/react";

const decisionStatusMap: Record<DecisionStatus, string> = {
  decidedFor: "decided in favor of",
  decidedAgainst: "decided against",
  undecided: "undecided",
};

interface DecisionCardProps {
  decision: Decision;
}

const DecisionCard = ({ decision }: DecisionCardProps) => {
  const { title, status, score } = decision;

  const isUndecided = status === "undecided";
  return (
    <Card.Root size="sm" maxW="sm" variant="elevated" shadow="xl">
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Description>{`Currently ${decisionStatusMap[status]}, with a decision score of ${score}`}</Card.Description>
      </Card.Body>
      <Card.Footer>
        <Button size="xs" variant={!isUndecided ? "surface" : "solid"}>
          {isUndecided ? "Help me decide" : "View details"}
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default DecisionCard;
