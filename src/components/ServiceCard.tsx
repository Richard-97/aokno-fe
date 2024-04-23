import { Box, Flex, Text } from "@chakra-ui/react";
import { Image } from "@/components/Image";
import { FC } from "react";
import { DoubleRightIcon } from "@/components/Icons/DoubleRighticon";
import { Service } from "@/interfaces/PageDetails";
import Link from "next/link";

export const ServiceCard: FC<Service> = ({ title, imageSrc, href }) => (
  <Flex
    flexDir="column"
    boxShadow="0px 8px 32px #C4C4C4"
    w="300px"
    justifyContent="center"
    py="4"
    borderRadius="10"
    as={Link}
    href={href}
    transition="transform .5s"
    _hover={{ transform: "scale(1.05)" }}
    position="relative"
  >
    <Image
      alt={title}
      src={imageSrc}
      height="220px"
      width="200px"
      display="flex"
      borderRadius="10px"
      justifyContent="center"
    />
    <Flex justifyContent="space-between" alignItems="center" mt="10" px="8">
      <Text
        color="gray_light_2"
        flex={1}
        fontFamily="primary"
        textStyle="base18"
        fontWeight="semibold"
      >
        {title}
      </Text>
      <Box transform="scale(0.7)">
        <DoubleRightIcon />
      </Box>
    </Flex>
  </Flex>
);
