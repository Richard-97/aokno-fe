import { FC, ReactNode } from "react";
import Link from "next/link";
import { Flex, StyleProps, Text } from "@chakra-ui/react";

interface Props {
  href?: string;
  shouldOpenInNewTab?: boolean;
  icon: ReactNode;
  label: string;
  labelStyles?: StyleProps;
}

export const InfoLinkBox: FC<Props> = ({
  href,
  shouldOpenInNewTab,
  icon,
  label,
  labelStyles,
}) => {
  const box = (
    <Flex flexDir="column" alignItems="center" h="100%" gap="3">
      {icon}
      <Text
        textStyle="base16"
        color="white"
        maxW="240px"
        textAlign="center"
        mt="auto"
        {...labelStyles}
      >
        {label.split("").map((char, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Text key={index} as="span">
            {char}
          </Text>
        ))}
      </Text>
    </Flex>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={shouldOpenInNewTab ? "_blank" : "_self"}
        rel="noreferrer"
      >
        {box}
      </Link>
    );
  }

  return box;
};
