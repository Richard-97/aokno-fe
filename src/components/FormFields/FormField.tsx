import { Children, cloneElement, FC, isValidElement, ReactNode } from "react";
import { useController, useFormContext } from "react-hook-form";
import {
  BoxProps,
  FormControl,
  FormErrorMessage,
  FormLabel,
  StyleProps,
  Text,
} from "@chakra-ui/react";

const ERROR_MESSAGE_HEIGHT = 8;

interface Props extends BoxProps {
  label: string;
  name: string;
  children: ReactNode;
  labelStyles?: StyleProps;
}

export const FormField: FC<Props> = ({
  name,
  label,
  children,
  labelStyles,
  ...rest
}) => {
  const { control } = useFormContext();

  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name,
  });

  const controlledChildren = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, field);
    }
    return child;
  });

  return (
    <FormControl
      isInvalid={Boolean(error?.message)}
      mb={error?.message ? 0 : ERROR_MESSAGE_HEIGHT}
      {...rest}
    >
      <FormLabel mb="1">
        <Text fontFamily="primary" color="gray_light_2" {...labelStyles}>
          {label}
        </Text>
      </FormLabel>
      {controlledChildren}
      <FormErrorMessage h={ERROR_MESSAGE_HEIGHT} mt={0}>
        <Text fontFamily="primary">{error?.message}</Text>
      </FormErrorMessage>
    </FormControl>
  );
};
