import { Box, BoxProps, Flex, Grid, Text } from "@chakra-ui/react";
import { Image } from "./Image";
import React from "react";
import { StepItem } from "@/interfaces/PageDetails";
import { DetailBox } from "./DetailBox";

export const ServiceItemCard: React.FC<StepItem & BoxProps> = ({
  title,
  description,
  imageSrc,
  details,
  hasObjectFit,
}) => {
  const hasDetails = details?.length > 0;

  return (
    <Flex gap="6" flexDir="column">
      <Flex gap="6" flexDir={{ base: "column", lg: "row" }}>
        <Image
          src={imageSrc}
          alt={title}
          width="210px"
          height="210px"
          objectFit={hasObjectFit ? "contain" : undefined}
          borderRadius="10px"
        />
        <Flex flexDir="column" gap="6" flex={1}>
          <Text textStyle="base28" mb="2">
            {title}
          </Text>
          {hasDetails ? (
            <Grid
              gridTemplateColumns={{ base: "auto", md: "220px 220px" }}
              gap="6"
            >
              {details?.map(({ title, value }) => (
                <DetailBox key={title} title={title} value={value} />
              ))}
            </Grid>
          ) : (
            <Text color="gray_light_2">{description}</Text>
          )}
        </Flex>
      </Flex>
      {hasDetails && description && (
        <Flex gap="6">
          <Box
            width="210px"
            height="30px"
            display={{ base: "none", lg: "initial" }}
          />
          <Text color="gray_light_2" flex={1}>
            {description}
          </Text>
        </Flex>
      )}
    </Flex>
  );
};
