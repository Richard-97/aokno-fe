import { BoxProps, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { ServiceCard } from "@/components/ServiceCard";
import { FC } from "react";
import { Service } from "@/interfaces/PageDetails";

interface Props extends BoxProps {
  services: Service[];
}

export const ServicesSection: FC<Props> = ({
  services,
  children,
  ...boxProps
}) => (
  <Flex flexDir="column" alignItems="center">
    <Grid
      templateColumns={{ base: "auto", md: "auto auto", xl: "auto auto auto" }}
      {...boxProps}
      gap="6"
      pb="10"
    >
      {services.map((props) => (
        <GridItem key={props.title}>
          <ServiceCard {...props} />
        </GridItem>
      ))}
    </Grid>
    {children}
  </Flex>
);
