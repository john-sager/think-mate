import { Button, HStack, Input, Popover, Portal } from "@chakra-ui/react";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";

interface CreateDecisionButtonProps {
  onSubmit: (newTitle: string) => void;
}

export const CreateDecisionButton = ({
  onSubmit,
}: CreateDecisionButtonProps) => {
  const [title, setTitle] = useState<string | null>(null);
  const [open, setOpen] = useState<boolean>(false);

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
    <Popover.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Popover.Trigger asChild>
        <Button size="xs" colorPalette="blue">
          Add new decision
        </Button>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Arrow />
            <Popover.Body>
              <Popover.Title fontWeight="medium" mb={2}>
                Create new decision
              </Popover.Title>
              <HStack>
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
              </HStack>
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
};
