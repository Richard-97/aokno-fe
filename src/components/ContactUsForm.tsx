import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import {
  EMAIL_VALIDATION,
  REQUIRED_FIELD,
  SELECT_FIELD,
} from "@/constants/validations";
import { Form } from "@/components/FormFields/Form";
import { InputField } from "@/components/FormFields/InputField";
import { SelectField } from "@/components/FormFields/SelectField";
import { TextareaField } from "@/components/FormFields/TextAreaField";
import { Button, Checkbox, Flex, Text, useToast } from "@chakra-ui/react";
import { ForwardedRef, useRef, useState } from "react";
import { SERVICES } from "@/constants/common";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";

interface Values {
  phoneNumber: string;
  email: string;
  service: string;
  description: string;
}

const validationSchema = yup.object().shape({
  phoneNumber: yup.string().required(REQUIRED_FIELD),
  email: yup.string().email(EMAIL_VALIDATION).required(REQUIRED_FIELD),
  service: yup
    .string()
    .required()
    .oneOf(
      SERVICES.map(({ label }) => label),
      SELECT_FIELD
    ),
  description: yup.string().required(REQUIRED_FIELD),
});

export const ContactUsForm = () => {
  const toast = useToast();
  const formRef = useRef();

  const [isLoading, setIsLoading] = useState(false);

  const formMethods = useForm<Values>({
    defaultValues: {
      phoneNumber: "",
      email: "",
      service: "",
      description: "",
    },
    mode: "onBlur",
    resolver: yupResolver(validationSchema),
  });

  const {
    formState: { isSubmitting, isValid },
  } = formMethods;

  const handleSubmit = () => {
    setIsLoading(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID as string,
        "template_f69431b",
        formRef.current as unknown as HTMLFormElement,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY as string,
        }
      )
      .then(() => {
        toast({
          title: "Formulár bol úspešne odoslaný",
          description:
            "Budeme Vás čoskoro kontaktovať. Tešíme sa na spoluprácu!",
          status: "success",
          duration: 4000,
          isClosable: true,
          position: "top",
        });
      })
      .catch((error) => {
        console.log("error", error);
        toast({
          title: "Formulár sa nepodarilo odoslať",
          description: "Skúste to znova prosím",
          status: "error",
          duration: 4000,
          isClosable: true,
          position: "top",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Form
      formMethods={formMethods}
      onSubmit={handleSubmit}
      display="flex"
      justifyContent="center"
      ref={formRef as unknown as ForwardedRef<HTMLFormElement>}
    >
      <Flex flexDir="column" alignItems="center" maxW="420px" w="100%">
        <InputField name="email" label="Emailová adresa">
          <EmailIcon color="gray_light_2" />
        </InputField>
        <InputField name="phoneNumber" label="Tel. číslo">
          <PhoneIcon color="gray_light_2" />
        </InputField>
        <SelectField name="service" label="Služba" placeholder="Vyberte...">
          {SERVICES.map(({ value, label }) => (
            <option key={value} value={label}>
              {label}
            </option>
          ))}
        </SelectField>
        <TextareaField name="description" label="Popis" />
        <Checkbox mb="8" color="gray_light_2" colorScheme="green">
          Súhlasím so zdieľaním osobných údajov
        </Checkbox>
        <Text
          fontFamily="primary"
          fontStyle="base14"
          color="gray_light_2"
          mt="auto"
          mb="2"
          textAlign="center"
        >
          Hneď ako si prečítame Vašu objednávku, Vás budeme kontaktovať.
        </Text>
        <Button
          fontSize="16px"
          variant="tertiary"
          type="submit"
          isDisabled={isSubmitting || !isValid}
          isLoading={isLoading}
        >
          Poslať
        </Button>
      </Flex>
    </Form>
  );
};
