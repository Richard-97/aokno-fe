import { FC } from "react";
import {
  BoxProps,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
} from "@chakra-ui/react";
import { FormField } from "@/components/FormFields/FormField";

interface Props extends InputProps {
  label: string;
  name: string;
  children?: React.ReactNode;
  formFieldProps?: BoxProps;
}

export const InputField: FC<Props> = ({
  label,
  name,
  formFieldProps,
  children,
  ...props
}) => (
  <FormField name={name} label={label} {...formFieldProps}>
    <InputGroup>
      <InputLeftElement pointerEvents="none">{children}</InputLeftElement>
    </InputGroup>
    <Input {...props} pl="10" />
  </FormField>
);
