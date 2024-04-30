import { FC, ReactNode, useEffect, useState } from "react";
import { Box, Flex, Show, Text } from "@chakra-ui/react";
import { MobileMenu } from "@/components/MobileMenu";
import { Layout } from "./Layout";
import { Image } from "./Image";
import { Logo } from "./Icons/Logo";
import Link from "next/link";

export interface RenderProps {
  onClose: () => void;
}

interface Props {
  isFullWidth?: boolean;
  children?: ReactNode | (({ onClose }: RenderProps) => ReactNode);
}

export const Header: FC<Props> = ({
  isFullWidth = false,
  children,
  ...props
}) => {
  const [isPageScrolled, setIsPageScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsPageScrolled(window.scrollY > 0);
    };
    handleScroll();

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderChildren = (props?: RenderProps) => {
    const areChildrenRenderProp = typeof children === "function";

    if (areChildrenRenderProp) {
      return children?.(props ?? { onClose: () => {} });
    }
    return children;
  };

  return (
    <Box
      as="header"
      position="fixed"
      top="0"
      right="0"
      left="0"
      py="3"
      bg={isPageScrolled ? "primary" : "transparent"}
      zIndex={140}
      boxShadow={isPageScrolled ? "md" : undefined}
      {...props}
    >
      <Layout>
        <Flex alignItems="center">
          <Flex alignItems="center" as={Link} href="/">
            <Logo color={isPageScrolled ? "white" : undefined} />
            <Text
              textStyle="heading28"
              color={isPageScrolled ? "white" : "primary"}
            >
              AOkno
            </Text>
          </Flex>
          <Box ml="auto">
            <Flex alignItems="center" gap="8">
              <Show above="md">
                <Flex gap="6">{renderChildren()}</Flex>
              </Show>
              <Show below="md">
                <MobileMenu>
                  {({ onClose }) => (
                    <Flex
                      flexDir="column"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Flex
                        flexDirection="column"
                        pt="4"
                        gap="4"
                        textAlign="center"
                      >
                        {renderChildren({ onClose })}
                      </Flex>
                    </Flex>
                  )}
                </MobileMenu>
              </Show>
            </Flex>
          </Box>
        </Flex>
      </Layout>
    </Box>
  );
};
