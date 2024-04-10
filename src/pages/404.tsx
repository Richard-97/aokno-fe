import { Layout } from "@/components/Layout";
import { colors } from "@/theme";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <Box bgGradient={colors.gradients.layout}>
      <Layout
        display="flex"
        flexDir="column"
        alignItems="center"
        minH="100vh"
        justifyContent="center"
      >
        <Text textStyle="base22" color="primary" mb="4">
          Stránku sa nepodarilo načítať.
        </Text>
        <Flex alignItems="center" gap="4" p="4" as={Link} href="/">
          <ArrowLeftIcon color="primary" />
          <Text>Vrátiť sa spať</Text>
        </Flex>
      </Layout>
    </Box>
  );
}
