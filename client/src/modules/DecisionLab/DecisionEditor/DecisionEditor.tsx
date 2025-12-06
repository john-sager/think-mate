import { Button, Heading, HStack, Input, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { FiEdit2, FiRotateCcw, FiSave, FiTrash } from "react-icons/fi";
import { useUpdateDecision } from "../decisionLab.hooks";
import { omitId } from "@/client/utils";

interface DecisionEditorProps {
  decision: Decision;
}

export const DecisionEditor = ({ decision }: DecisionEditorProps) => {
  const { updateDecision } = useUpdateDecision(decision.id);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedDec, setEditedDec] = useState<UpdateDecisionDto>(
    omitId(decision)
  );

  const { title, description, score, status } = editedDec;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;

    setEditedDec((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancelEdit = () => {
    setEditedDec(omitId(decision));
    setIsEditing(false);
  };

  const handleSave = () => {
    updateDecision(editedDec);
    setIsEditing(false);
  };

  return (
    <VStack>
      <Heading>
        {isEditing ? (
          <Input value={editedDec.title} name="title" onChange={handleChange} />
        ) : (
          title
        )}
      </Heading>
      <HStack gap={4}>
        {isEditing ? (
          <>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => handleCancelEdit()}
            >
              <FiRotateCcw />
            </Button>
            <Button size="sm" variant="ghost" onClick={() => handleSave()}>
              <FiSave color="blue" />
            </Button>
          </>
        ) : (
          <>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setIsEditing(true)}
            >
              <FiEdit2 />
            </Button>
            <Button size="sm" variant="ghost">
              <FiTrash color="red" />
            </Button>
          </>
        )}
      </HStack>
      <Text>Description: {description}</Text>
      <HStack gap={4}>
        <Text>Status: {status}</Text>
        <Text>Score: {score}</Text>
      </HStack>
    </VStack>
  );
};
