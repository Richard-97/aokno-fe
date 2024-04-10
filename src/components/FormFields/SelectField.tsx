import { FC } from "react";
import { SelectProps, Select, StyleProps } from "@chakra-ui/react";
import { FormField } from "@/components/FormFields/FormField";

interface Props extends SelectProps {
  label: string;
  name: string;
  labelStyles?: StyleProps;
}

export const SelectField: FC<Props> = ({
  name,
  label,
  children,
  labelStyles,
  ...props
}) => (
  <FormField name={name} label={label} labelStyles={labelStyles}>
    <Select {...props}>{children}</Select>
  </FormField>
);
