import { Flex, Grid, Text } from "@chakra-ui/react";
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
      mb="4"
    >
      Partneri, s ktorými spolupracujeme pri inovácii a vývoji našich produktov.
    </Text>
    <Grid
      justifyContent="center"
      gap={{ base: "8", lg: "24" }}
      gridTemplateColumns={{
        base: "auto",
        md: "auto auto",
        lg: "auto auto auto auto",
      }}
      alignItems="center"
      justifyItems="center"
    >
      <Image
        alt="hisec"
        src="/assets/partner-hisec.png"
        display="flex"
        justifyContent="center"
        alignItems="center"
      />
      <Image alt="veka" src="/assets/partner-veka.png" />
      <Image alt="aluplast" src="/assets/aluplast-logo.png" />
      <Image alt="aliplast" src="/assets/aliplast-logo.png" width="177px" />
    </Grid>
  </Flex>
);
