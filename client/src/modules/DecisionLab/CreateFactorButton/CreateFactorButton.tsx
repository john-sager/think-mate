import { PopoverButton } from "@/client/components/PopoverButton/PopoverButton";
import { usePopoverControls } from "@/client/components/PopoverButton/popoverButton.hooks";
import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";

interface CreateFactorButtonProps {
  onSubmit: (newTitle: string) => void;
  factorType: "pro" | "con";
}

export const CreateFactorButton = ({
  onSubmit,
  factorType,
}: CreateFactorButtonProps) => {
  const [open, setOpen] = usePopoverControls();
  const [title, setTitle] = useState<string | null>(null);

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
    <PopoverButton
      buttonTitle={`Add a ${factorType}`}
      popoverTitle={`Add new ${factorType}`}
      open={open}
      onOpenChange={setOpen}
    >
      <Input
        placeholder={`Title of your ${factorType}`}
        size="xs"
        onChange={handleInputChange}
      />
      <Button size="xs" onClick={handleSubmit} aria-label="Add" variant="ghost">
        <FiPlus />
      </Button>
    </PopoverButton>
  );
};
