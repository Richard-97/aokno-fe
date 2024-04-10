import { Box, Flex, Text } from "@chakra-ui/react";
import { Layout } from "@/components/Layout";
import { Carousel } from "@/components/Carousel";
import { Reference } from "@/interfaces/PageDetails";

export const References: React.FC<Reference> = ({ images }) => {
  return (
    <Flex
      id="referencie"
      flexDir="column"
      backgroundColor="primary"
      borderTopRightRadius={30}
      borderTopLeftRadius={30}
      pb="10"
      color="white"
    >
      <Layout>
        <Text textAlign="center" my="10" textStyle="base22">
          References
        </Text>
        <Text textAlign="center" mb="10" textStyle="base18">
          Fotodokumentácia naších prác
        </Text>
        <Box w="100%" position="relative">
          <Carousel slides={images} />
        </Box>
      </Layout>
    </Flex>
  );
};
