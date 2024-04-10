import { StepDetail } from "@/interfaces/PageDetails";
import { Box, Flex, Text } from "@chakra-ui/react";

export const DetailBox: React.FC<StepDetail> = ({ title, value }) => (
  <Flex flexDir="column">
    <Flex alignItems="center" gap="2" mb="2">
      <Box backgroundColor="primary" h="14px" w="14px" borderRadius={9999} />
      <Text textStyle="base16" color="primary">
        {title}
      </Text>
    </Flex>
    <Text color="gray_light_2" textStyle="base14">
      {value}
    </Text>
  </Flex>
);
