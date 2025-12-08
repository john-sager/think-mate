import { type ButtonProps, Card as ChakraCard } from "@chakra-ui/react";
import type { LinkButtonProps } from "@/client/components/LinkButton/LinkButton";

type ButtonFooter =
  | React.ReactElement<ButtonProps | LinkButtonProps>
  | Array<React.ReactElement<ButtonProps | LinkButtonProps>>;

interface CardProps {
  title?: string;
  children: React.ReactNode; // the body of card
  footer?: ButtonFooter;
}
export const Card = ({ title, children, footer }: CardProps) => (
  <ChakraCard.Root size="sm" maxW="sm" variant="elevated" shadow="lg">
    {title && <ChakraCard.Header>{title}</ChakraCard.Header>}
    <ChakraCard.Body>{children}</ChakraCard.Body>
    {footer && <ChakraCard.Footer>{footer}</ChakraCard.Footer>}
  </ChakraCard.Root>
);
