import { Flex, Text } from "@chakra-ui/react";
import { ClockIcon } from "@/components/Icons/ClockIcon";

interface Props {
  title: string;
  time: string;
}

export const TimeBox: React.FC<Props> = ({ title, time }) => (
  <Flex alignItems="center" gap="8">
    <Flex alignItems="center" justifyContent="space-between" gap="4">
      <ClockIcon />
      <Text textStyle="base16" color="white">
        {title}
      </Text>
    </Flex>
    <Text textStyle="base16" color="white" ml="auto">
      {time}
    </Text>
  </Flex>
);
