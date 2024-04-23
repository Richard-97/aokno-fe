import { FC } from "react";
import { Spinner as ChakraSpinner, SpinnerProps } from "@chakra-ui/react";

export const Spinner: FC<SpinnerProps> = ({
  thickness = "4px",
  speed = "0.75s",
  emptyColor = "secondary",
  color = "primary",
  size = "lg",
  ...props
}) => (
  <ChakraSpinner
    thickness={thickness}
    speed={speed}
    emptyColor={emptyColor}
    color={color}
    size={size}
    {...props}
  />
);
