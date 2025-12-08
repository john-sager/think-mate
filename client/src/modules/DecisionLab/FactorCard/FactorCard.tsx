import { Card } from "@/client/components/Card/Card";
import { CardDescription } from "@chakra-ui/react";

export const FactorCard = ({ factor }: { factor: Factor }) => (
  <Card title={factor.name}>
    <>
      <CardDescription>{factor.description}</CardDescription>
      <CardDescription>{factor.score}</CardDescription>
      <CardDescription>{factor.type}</CardDescription>
    </>
  </Card>
);
