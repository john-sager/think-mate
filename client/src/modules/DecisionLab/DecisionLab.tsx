import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";

import { decisionLabRoute } from "@/client/app/routes";
import { Card } from "@/client/components/Card/Card";

import { DecisionEditor } from "./DecisionEditor/DecisionEditor";
import { filterfy } from "@/client/utils";

interface Factor {
  id: string;
  name: string;
  description: string;
  type: "pro" | "con";
  score: number;
}
const factors: Factor[] = [
  {
    id: "1",
    name: "hello",
    description: "description here",
    type: "pro",
    score: 3,
  },
  {
    id: "2",
    name: "hello",
    description: "description here",
    type: "con",
    score: 3,
  },
  {
    id: "3",
    name: "test",
    description: "description here",
    type: "pro",
    score: 5,
  },
];
const DecisionLab = () => {
  const { decisionId } = decisionLabRoute.useParams();
  const [pros, cons] = useMemo(
    () => filterfy(factors, (f) => f.type === "pro"),
    []
  );

  const { data } = useQuery<Decision | null>({
    queryKey: ["decisions", decisionId],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3000/decisions/${decisionId}`
      );
      const data = await response.json();
      return data;
    },
  });

  if (!data) return null;

  return (
    <>
      <DecisionEditor decision={data} />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          {pros.map((p) => (
            <Card title={p.name} body={p.description + " " + p.type} />
          ))}
        </div>
        <div>
          {cons.map((c) => (
            <Card title={c.name} body={c.description + " " + c.type} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DecisionLab;
