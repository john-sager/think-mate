import { Button, type ButtonProps } from "@chakra-ui/react";
import { Link, type LinkComponentProps } from "@tanstack/react-router";

export type LinkButtonProps = Pick<LinkComponentProps, "to" | "params"> &
  Pick<ButtonProps, "size" | "variant"> & {
    buttonText: string;
  };

export const LinkButton = ({
  to,
  params,
  buttonText,
  size,
  variant,
}: LinkButtonProps) => (
  <Link to={to} params={params}>
    <Button size={size ?? "xs"} variant={variant ?? "surface"}>
      {buttonText}
    </Button>
  </Link>
);
