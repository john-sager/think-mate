import { Button, Card } from "@chakra-ui/react";
import { Link } from "@tanstack/react-router";

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

  const isUndecided = status === "undecided";

  return (
    <Card.Root size="sm" maxW="sm" variant="elevated" shadow="lg">
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Description>{`Currently ${decisionStatusMap[status]}, with a decision score of ${score}`}</Card.Description>
      </Card.Body>
      <Card.Footer>
        <Link to="/decision/$decisionId" params={{ decisionId: id }}>
          <Button size="xs" variant="surface">
            {isUndecided ? "Help me decide" : "View details"}
          </Button>
        </Link>
      </Card.Footer>
    </Card.Root>
  );
};

export default DecisionCard;
