import { Box, Flex, Text } from "@chakra-ui/react";
import { Image } from "@/components/Image";
import { FC } from "react";
import { DoubleRightIcon } from "@/components/Icons/DoubleRighticon";
import { Service } from "@/interfaces/PageDetails";
import Link from "next/link";

interface Props extends Service {
  isDisabled?: boolean;
}

export const ServiceCard: FC<Service & Props> = ({
  title,
  imageSrc,
  href,
  isDisabled = false,
}) => (
  <Flex
    flexDir="column"
    boxShadow="0px 8px 32px #C4C4C4"
    w="280px"
    justifyContent="center"
    py="4"
    borderRadius="10"
    {...(!isDisabled && {
      as: Link,
    })}
    href={href}
    transition="transform .5s"
    _hover={{ transform: "scale(1.05)" }}
    position="relative"
  >
    {isDisabled && (
      <Flex
        position="absolute"
        top="0"
        bottom="0"
        width="100%"
        background="gray_dark"
        opacity="0.7"
        zIndex={10}
        justifyContent="center"
        alignItems="center"
      >
        <Text textStyle="base22">TODO</Text>
      </Flex>
    )}

    <Image
      alt={title}
      src={imageSrc}
      height="200px"
      display="flex"
      justifyContent="center"
    />
    <Flex justifyContent="space-between" alignItems="center" mt="10" px="8">
      <Text color="gray_light_2">{title}</Text>
      <Box transform="scale(0.7)">
        <DoubleRightIcon />
      </Box>
    </Flex>
  </Flex>
);
