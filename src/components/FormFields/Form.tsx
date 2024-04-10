import { FC, ForwardedRef, ReactNode } from "react";
import { BoxProps, Box } from "@chakra-ui/react";
import { FormProvider, UseFormReturn } from "react-hook-form";
import React from "react";

interface Props extends BoxProps {
  children?: ReactNode;
  formMethods: UseFormReturn<any>;
  onSubmit: (values: any) => void;
  ref?: React.Ref<HTMLFormElement> | null;
}

export type Ref = ForwardedRef<HTMLFormElement>;

// TODO: Remove ts-ignore.
//@ts-ignore
export const Form: FC<Props> = React.forwardRef(
  ({ children, formMethods, onSubmit, ...props }, ref: Ref) => (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)} ref={ref}>
        <Box {...props}>{children}</Box>
      </form>
    </FormProvider>
  )
);

Form.displayName = "Form";
