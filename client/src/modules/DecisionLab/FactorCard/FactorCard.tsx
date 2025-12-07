import { Card } from "@/client/components/Card/Card";

export const FactorCard = ({ factor }: { factor: Factor }) => (
  <Card title={factor.name} body={factor.description + " " + factor.type} />
);
