import { Flex, Text } from "@chakra-ui/react";
import { Image } from "./Image";

export const PartnersSection = () => (
  <Flex flexDir="column" alignItems="center" justifyContent="center" mt="24">
    <Text color="primary" mb="6" textStyle="base22">
      Naši partneri
    </Text>
    <Text
      textAlign="center"
      maxW="650px"
      color="gray_light_2"
      textStyle="base16"
    >
      Toto sú naši partneri, s ktorými spolupracujeme pri inovácii a vývoji
      našich produktov.
    </Text>
    <Flex
      justifyContent="center"
      p={{ base: "4", lg: "16" }}
      gap={{ base: "8", lg: "24" }}
    >
      <Image
        alt="hisec"
        src="/assets/partner-hisec.png"
        display="flex"
        justifyContent="center"
        alignItems="center"
      />
      <Image alt="veka" src="/assets/partner-veka.png" />
    </Flex>
  </Flex>
);
