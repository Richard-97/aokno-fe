import { Step } from "@/interfaces/PageDetails";
import { Box, BoxProps, Button, Flex, Text } from "@chakra-ui/react";
import { StepArrow } from "./Icons/StepArrow";
import { ServiceItemCard } from "./ServiceItemCard";
import { Layout } from "./Layout";
import { useState } from "react";
import { RevealWrapper } from "next-reveal";

interface Props extends BoxProps {
  steps: Step[];
}

export const Steps: React.FC<Props> = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(1);

  const activeStepDetails = steps[activeStep - 1] ?? {};

  return (
    <Flex flexDir="column" my="16">
      <RevealWrapper
        origin="bottom"
        delay={300}
        duration={1500}
        distance="500px"
        scale={1.25}
        viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
      >
        <Flex align="center" w="100%">
          {steps.map(({ id, index }) => (
            <Flex
              key={id}
              flex={1}
              justifyContent="center"
              alignItems="center"
              position="relative"
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
      </RevealWrapper>
      {steps.length > 0 && (
        <RevealWrapper
          origin="bottom"
          delay={300}
          duration={1500}
          distance="500px"
          scale={1.25}
          viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
        >
          <Flex justifyContent="center" gap="10" mt="12">
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
        </RevealWrapper>
      )}
      <Layout>
        {activeStepDetails.title && (
          <RevealWrapper
            origin="bottom"
            delay={1000}
            duration={1500}
            distance="500px"
            scale={1.25}
            viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
          >
            <Flex
              flexDir="column"
              mt="16"
              color="primary"
              mb="24"
              alignItems="center"
            >
              <Text textAlign="center" mb="8">
                {activeStepDetails?.title}
              </Text>
              <Flex pl={{ base: "0", lf: "40" }} alignItems="center">
                <Text flex={1} color="gray_light_2" w="392px">
                  {activeStepDetails?.description}
                </Text>
                <Box mb="-200px" display={{ base: "none", lg: "initial" }}>
                  <StepArrow />
                </Box>
              </Flex>
              <RevealWrapper
                origin="bottom"
                delay={1500}
                duration={1500}
                distance="500px"
                scale={1.25}
                viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
              >
                <Flex flexDir="column" gap="10" mt="160px">
                  {activeStepDetails.items.map((itemProps) => (
                    <ServiceItemCard key={itemProps.id} {...itemProps} />
                  ))}
                </Flex>
              </RevealWrapper>
            </Flex>
          </RevealWrapper>
        )}
      </Layout>
    </Flex>
  );
};
