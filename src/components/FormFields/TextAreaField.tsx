import { FC } from "react";
import { Textarea, TextareaProps } from "@chakra-ui/react";
import { FormField } from "@/components/FormFields/FormField";

interface Props extends TextareaProps {
  label: string;
  name: string;
}

export const TextareaField: FC<Props> = ({ label, name, ...props }) => (
  <FormField name={name} label={label}>
    <Textarea {...props} />
  </FormField>
);
