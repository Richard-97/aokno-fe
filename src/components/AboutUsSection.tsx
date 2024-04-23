import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { Image } from "./Image";

export const AboutUsSection = () => (
  <Flex justifyContent="center" gap={{ base: "12", xl: "32" }} flexWrap="wrap">
    <Flex flexDir="column" maxW="350px">
      <Text
        fontFamily="primary"
        fontWeight="semibold"
        textStyle="base22"
        color="primary"
        mb="6"
      >
        Viac ako 20 ročné skúsenosti!
      </Text>
      <Text color="gray_light_2" textStyle="base16" lineHeight="1.2">
        Spoločnosť, pôsobiaca v oblasti montáže plastových a hliníkových okien a
        zasklenia balkónov, má bohaté 25-ročné skúsenosti v odvetví. Jej hlavným
        cieľom je poskytovať spoľahlivé služby a kvalitný servis zákazníkom.
        Spolu s renomovanými dodávateľmi spoločne vyvíjajú a inovujú produkty,
        aby zabezpečili najvyššiu úroveň kvality pre svojich klientov.
      </Text>
    </Flex>
    <Grid gridTemplateColumns="auto auto">
      <GridItem>
        <Image
          src="/assets/about-us-1.png"
          alt="O nas 1"
          w={{ base: "180px", md: "240px" }}
        />
      </GridItem>
      <GridItem>
        <Image
          src="/assets/about-us-3.png"
          alt="O nas 3"
          w={{ base: "180px", md: "240px" }}
          ml="-100px"
          mt="40px"
        />
      </GridItem>
      <GridItem>
        <Image
          src="/assets/about-us-2.png"
          alt="O nas 2"
          w={{ base: "180px", md: "240px" }}
          mt="-80px"
          ml="60px"
        />
      </GridItem>
    </Grid>
  </Flex>
);
