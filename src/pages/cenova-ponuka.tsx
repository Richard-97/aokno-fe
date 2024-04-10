import { Header } from "@/components/Header";
import { PriceOfferIcon } from "@/components/Icons/PriceOfferIcon";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import { Button, Checkbox, Flex, Text, useToast } from "@chakra-ui/react";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  EMAIL_VALIDATION,
  REQUIRED_FIELD,
  SELECT_FIELD,
} from "@/constants/validations";
import { useForm } from "react-hook-form";
import { Form } from "@/components/FormFields/Form";
import { InputField } from "@/components/FormFields/InputField";
import { TextareaField } from "@/components/FormFields/TextAreaField";
import { SelectField } from "@/components/FormFields/SelectField";
import { ForwardedRef, useRef } from "react";
import { ArrowLeftIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { CheckboxField } from "@/components/FormFields/CheckboxField";

interface Values {
  phoneNumber: string;
  email: string;
  service: string;
  description: string;
  isChecked: boolean;
}

const SERVICES = [
  { value: "window-plastic", label: "Plastové okna" },
  { value: "window-aluminium", label: "Hlinikové okna" },
  { value: "Doors", label: "Dvere" },
];

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
  isChecked: yup.bool().oneOf([true], "Súhlas je požadovaný").required(),
});

export default function PriceOfferPage() {
  const toast = useToast();
  const formRef = useRef();

  const formMethods = useForm<Values>({
    defaultValues: {
      phoneNumber: "",
      email: "",
      service: "",
      description: "",
      isChecked: false,
    },
    resolver: yupResolver(validationSchema),
  });

  const {
    formState: { isSubmitting, isValid },
  } = formMethods;

  const handleSubmit = () => {
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
        console.log(">>", error);
        toast({
          title: "Formulár sa nepodarilo odoslať",
          description: "Skúste to znova prosím",
          status: "error",
          duration: 4000,
          isClosable: true,
          position: "top",
        });
      });
  };

  return (
    <>
      <Seo />
      <Flex
        alignItems="center"
        gap="4"
        p="4"
        as={Link}
        href="/"
        position="fixed"
        backgroundColor="white"
        w="100%"
      >
        <ArrowLeftIcon color="primary" />
        <Text>Vrátiť sa spať</Text>
      </Flex>
      <Layout>
        <Flex alignItems="center" flexDir="column" pt="24">
          <PriceOfferIcon />
          <Text textStyle="base28" color="primary" my="6" textAlign="center">
            VYRÁBAME A DODÁVAME NAČAS!
          </Text>
          <Text
            textStyle="base22"
            mb="12"
            color="gray_light_2"
            textAlign="center"
          >
            Ozveme sa vám do 24 hodín
          </Text>
          <Flex
            flexDir="column"
            alignItems="center"
            boxShadow="2xl"
            p="8"
            mb="20"
            w={{ base: "100%", lg: "760px" }}
          >
            <Text textStyle="base18" color="gray_light_2" textAlign="center">
              Ku zákazníkom pristupujeme jednotlivo
            </Text>
            <Text
              my="8"
              color="primary"
              textStyle="base18"
              maxW="330px"
              textAlign="center"
              lineHeight="1.9"
            >
              Každá cenová ponuka je idnividuálna
            </Text>
            <Form
              ref={formRef as unknown as ForwardedRef<HTMLFormElement>}
              formMethods={formMethods}
              onSubmit={handleSubmit}
            >
              <Flex gap="6" flexDir={{ base: "column", lg: "row" }}>
                <Flex
                  flexDir="column"
                  alignItems="center"
                  w="100%"
                  flex="1"
                  mb={{ base: "0", lg: "16" }}
                  minW={{ base: "100%", lg: "330px" }}
                >
                  <InputField name="email" label="Emailová adresa">
                    <EmailIcon color="gray_light_2" />
                  </InputField>
                  <InputField name="phoneNumber" label="Tel. číslo">
                    <PhoneIcon color="gray_light_2" />
                  </InputField>
                  <SelectField
                    name="service"
                    label="Služba"
                    placeholder="Vyberte..."
                  >
                    {SERVICES.map(({ value, label }) => (
                      <option key={value} value={label}>
                        {label}
                      </option>
                    ))}
                  </SelectField>
                </Flex>
                <Flex flexDir="column" flex="1">
                  <TextareaField name="description" label="Popis" />
                  <CheckboxField
                    name="isChecked"
                    label=""
                    description=" Súhlasím so zdieľaním osobných údajov"
                  />
                  <Text
                    fontFamily="primary"
                    fontStyle="base14"
                    color="gray_light_2"
                    mt="auto"
                    mb="2"
                    textAlign="center"
                  >
                    Hneď ako si prečítame Vašu objednávku, Vás budeme
                    kontaktovať.
                  </Text>
                  <Button
                    fontSize="16px"
                    variant="tertiary"
                    type="submit"
                    isDisabled={isSubmitting || !isValid}
                  >
                    Poslať
                  </Button>
                </Flex>
              </Flex>
            </Form>
          </Flex>
        </Flex>
      </Layout>
    </>
  );
}
