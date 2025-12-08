import { Button, HStack, Popover, Portal } from "@chakra-ui/react";

interface PopoverButtonProps {
  buttonTitle: string;
  popoverTitle: string;
  open: boolean;
  onOpenChange: (isOpen: React.SetStateAction<boolean>) => void;
  children: React.ReactNode;
}

export const PopoverButton = ({
  buttonTitle,
  popoverTitle,
  open,
  onOpenChange,
  children,
}: PopoverButtonProps) => {
  const handleOpenChange = (isOpen: boolean) => {
    onOpenChange(isOpen);
  };

  return (
    <Popover.Root open={open} onOpenChange={(e) => handleOpenChange(e.open)}>
      <Popover.Trigger asChild>
        <Button size="xs" colorPalette="blue">
          {buttonTitle}
        </Button>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Arrow />
            <Popover.Body>
              <Popover.Title fontWeight="medium" mb={2}>
                {popoverTitle}
              </Popover.Title>
              <HStack>{children}</HStack>
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
};
