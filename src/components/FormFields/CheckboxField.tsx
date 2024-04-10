import { FC } from "react";
import { BoxProps, Checkbox, CheckboxProps } from "@chakra-ui/react";
import { FormField } from "@/components/FormFields/FormField";

interface Props extends CheckboxProps {
  label: string;
  name: string;
  description: string;
  children?: React.ReactNode;
  formFieldProps?: BoxProps;
}

export const CheckboxField: FC<Props> = ({
  label,
  name,
  description,
  formFieldProps,
  children,
  ...props
}) => (
  <FormField name={name} label={label} {...formFieldProps}>
    <Checkbox color="gray_light_2" colorScheme="green" {...props}>
      {description}
    </Checkbox>
  </FormField>
);
