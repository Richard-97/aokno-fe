import { FC, ReactNode } from "react";
import { BoxProps, Flex, Text } from "@chakra-ui/react";

interface Props extends BoxProps {
  titleComponent: ReactNode;
  titleColor?: string;
  subTitle?: string;
  subTitleColor?: string;
}

export const SectionTitle: FC<Props> = ({
  titleComponent,
  titleColor = "gray.500",
  subTitle,
  subTitleColor = "primary",
  ...props
}) => (
  <Flex flexDir="column" {...props}>
    <Text
      as="h3"
      textStyle="heading36"
      color={titleColor}
      textAlign="center"
      mb="10"
    >
      {titleComponent}
    </Text>
    {subTitle && (
      <Text
        as="h2"
        textStyle="base.400"
        color={subTitleColor}
        textAlign="center"
        mb="3"
      >
        {subTitle}
      </Text>
    )}
  </Flex>
);
