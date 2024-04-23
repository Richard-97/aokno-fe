import { Step } from "@/interfaces/PageDetails";
import { Box, BoxProps, Button, Flex, Text } from "@chakra-ui/react";
import { StepArrow } from "./Icons/StepArrow";
import { ServiceItemCard } from "./ServiceItemCard";
import { Layout } from "./Layout";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

interface Props extends BoxProps {
  steps: Step[];
}

export const Steps: React.FC<Props> = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(1);

  const activeStepDetails = steps[activeStep - 1] ?? {};

  return (
    <Flex flexDir="column" my="16">
      <Fade>
        <Flex align="center" w="100%">
          {steps.map(({ id, index }) => (
            <Flex
              key={id}
              flex={1}
              justifyContent="center"
              alignItems="center"
              position="relative"
              display={steps.length > 1 ? undefined : "none"}
            >
              <Box
                transition="border-color 2s"
                borderWidth="12px"
                borderColor={activeStep >= index ? "primary" : "gray_light_4"}
                w="50%"
              />
              <Flex
                borderRadius={9999}
                backgroundColor={
                  activeStep >= index ? "primary" : "gray_light_4"
                }
                transition="background-color 2s"
                w="45px"
                h="45px"
                justifyContent="center"
                alignItems="center"
                position="absolute"
                as={Button}
                onClick={() => {
                  setActiveStep(index);
                }}
              >
                <Text
                  textStyle="base14"
                  color={activeStep >= index ? "white" : "primary"}
                >
                  {index}.
                </Text>
              </Flex>
              <Box
                borderWidth="12px"
                transition="border-color 2s"
                borderColor={
                  activeStep > index || activeStep === steps.length
                    ? "primary"
                    : "gray_light_4"
                }
                w="50%"
              />
            </Flex>
          ))}
        </Flex>
      </Fade>
      {steps.length > 0 && (
        <Fade>
          <Flex
            justifyContent="center"
            gap="10"
            mt="12"
            display={steps.length > 1 ? undefined : "none"}
          >
            <Button
              disabled={activeStep === 1}
              onClick={() => {
                setActiveStep((prevActiveStep) =>
                  prevActiveStep <= 1 ? 1 : prevActiveStep - 1
                );
              }}
            >
              Späť
            </Button>
            <Button
              disabled={activeStep === steps.length}
              onClick={() => {
                setActiveStep((prevActiveStep) =>
                  prevActiveStep > steps.length ? 1 : prevActiveStep + 1
                );
              }}
            >
              Ďalej
            </Button>
          </Flex>
        </Fade>
      )}
      <Layout>
        {activeStepDetails.title && (
          <Fade>
            <Flex
              flexDir="column"
              mt="16"
              color="primary"
              mb="24"
              alignItems="center"
            >
              <Text textAlign="center" mb="8" textStyle="base28">
                {activeStepDetails?.title}
              </Text>
              <Flex pl={{ base: "0", lf: "40" }} alignItems="center">
                <Text
                  flex={1}
                  color="gray_light_2"
                  w="392px"
                  fontFamily="primary"
                  fontWeight="semibold"
                >
                  {activeStepDetails?.description}
                </Text>
                <Box mb="-200px" display={{ base: "none", lg: "initial" }}>
                  <StepArrow />
                </Box>
              </Flex>
              <Fade>
                <Flex flexDir="column" gap="20" mt="160px">
                  {activeStepDetails.items.map((itemProps) => (
                    <ServiceItemCard key={itemProps.id} {...itemProps} />
                  ))}
                </Flex>
              </Fade>
            </Flex>
          </Fade>
        )}
      </Layout>
    </Flex>
  );
};
