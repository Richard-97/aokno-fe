import {
  Box,
  BoxProps,
  Button,
  Flex,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { Layout } from "@/components/Layout";
import { colors } from "@/theme";
import { PromoDownIcon } from "@/components/Icons/PromoDownIcon";
import { PromoButtonProps } from "@/interfaces/PageDetails";
import Link from "next/link";

interface Props extends BoxProps {
  title: string;
  subtitle: string;
  primaryButtonProps: PromoButtonProps;
  secondaryButtonProps: PromoButtonProps;
  promoBar: string;
}

export const PromoSection: React.FC<Props> = ({
  title,
  subtitle,
  primaryButtonProps,
  secondaryButtonProps,
  promoBar,
  ...boxProps
}) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true }) || false;

  return (
    <Flex
      position="relative"
      h="100vh"
      w="100%"
      justifyItems="center"
      alignItems="center"
      flexDir="column"
      {...boxProps}
    >
      <Box minH="100%">
        <Box
          as="video"
          minH="100%"
          w="100%"
          src="/videos/promo_video.mp4"
          objectFit={isDesktop ? "cover" : "none"}
          autoPlay
          loop
          id="promo_video"
          muted
          playsInline
        />
      </Box>
      <Flex
        position="absolute"
        top="0"
        bottom="0"
        w="inherit"
        background={colors.gray_light}
        opacity={{ base: 0, lg: "0.6" }}
      />
      <Layout
        position="absolute"
        top="0"
        bottom="0"
        p={{ base: "0", lg: "4" }}
        w="inherit"
        display="flex"
        justifyItems="center"
        alignItems="center"
        flexDir="column"
        zIndex={100}
      >
        <Flex height={{ base: "10%", lg: "30%" }} />
        <Flex
          bgGradient={colors.gradients.light_gray_bottom}
          w="100%"
          h={{ base: "100%", xl: "70%" }}
          borderTopLeftRadius={{ base: 0, lg: 12 }}
          borderTopRightRadius={{ base: 0, lg: 12 }}
          opacity={0.9}
          p={{ base: "4", md: "8", lg: "20" }}
          flexDir="column"
        >
          <Text
            textStyle="heading64"
            color="primary"
            letterSpacing="6px"
            mt={{ base: "24", lg: "20" }}
          >
            {title}
          </Text>
          <Text textStyle="heading28" mt="4" mr={{ base: "0", lg: "40" }}>
            {subtitle}
          </Text>
          <Flex gap="4" mt={{ base: 4, lg: 8 }} flexWrap="wrap">
            <Button
              as={Link}
              href={primaryButtonProps.href}
              variant={primaryButtonProps.variant}
              scroll={false}
            >
              {primaryButtonProps.title}
            </Button>
            <Button
              as={Link}
              href={secondaryButtonProps.href}
              variant={secondaryButtonProps.variant ?? "secondary"}
              scroll={false}
            >
              {secondaryButtonProps.title}
            </Button>
          </Flex>
        </Flex>
      </Layout>
      <Box position="absolute" bottom="0" width="100%" bg="primary" py="4">
        <Layout>
          <Flex justifyContent="space-between" alignItems="center" gap="4">
            <Text color="white" textStyle="base14">
              {promoBar}
            </Text>
            <Button
              variant="secondary"
              fontSize="10px"
              size="sm"
              as={Link}
              href="/sluzby/plastove-okna"
              zIndex={100}
            >
              Viac info
            </Button>
          </Flex>
        </Layout>
      </Box>
      <Box position="absolute" bottom="-85px" transform="scale(0.6)">
        <PromoDownIcon />
      </Box>
    </Flex>
  );
};
