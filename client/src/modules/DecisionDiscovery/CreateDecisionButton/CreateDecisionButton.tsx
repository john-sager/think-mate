import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Button, Input } from "@chakra-ui/react";

import { PopoverButton } from "@/client/components/PopoverButton/PopoverButton";
import { usePopoverControls } from "@/client/components/PopoverButton/popoverButton.hooks";

interface CreateDecisionButtonProps {
  onSubmit: (newTitle: string) => void;
}

export const CreateDecisionButton = ({
  onSubmit,
}: CreateDecisionButtonProps) => {
  const [title, setTitle] = useState<string | null>(null);
  const [open, setOpen] = usePopoverControls();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const handleSubmit = () => {
    if (title) {
      onSubmit(title);
      setOpen(false);
    }
  };

  return (
    <>
      <PopoverButton
        buttonTitle="Add new decision"
        popoverTitle="Create new decision"
        open={open}
        onOpenChange={setOpen}
      >
        <Input
          placeholder="Title of your decision"
          size="xs"
          onChange={handleInputChange}
        />
        <Button
          size="xs"
          onClick={handleSubmit}
          aria-label="Add"
          variant="ghost"
        >
          <FiPlus />
        </Button>
      </PopoverButton>
    </>
  );
};
