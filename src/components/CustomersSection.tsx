import { Flex, Text } from "@chakra-ui/react";
import { Image } from "./Image";

export const CustomersSection = () => (
  <Flex
    justifyContent="center"
    alignItems="center"
    flexDir={{ base: "column", lg: "row" }}
    gap={{ base: "8", lg: "16" }}
    my="8"
  >
    <Flex flexDir="column" gap="6">
      <Text
        color="primary"
        textStyle="base22"
        fontFamily="primary"
        fontWeight="semibold"
        textAlign={{ base: "center", lg: "start" }}
      >
        Viac ako 100 spokojných zákazníkov
      </Text>
      <Text
        maxW="450px"
        color="gray_light_2"
        textStyle="base16"
        textAlign={{ base: "center", lg: "start" }}
      >
        Našu prácu ocenili viac ako 100 spokojných zákazníkov po celom
        Slovensku.
      </Text>
    </Flex>
    <Image alt="customers" src="/assets/customers-map.png" />
  </Flex>
);
