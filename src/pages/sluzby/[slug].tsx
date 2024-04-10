import { Header } from "@/components/Header";
import { Image } from "@/components/Image";
import { Layout } from "@/components/Layout";
import { PricePromoButton } from "@/components/PricePromoButton";
import { PromoSection } from "@/components/PromoSection";
import { References } from "@/components/References";
import { Seo } from "@/components/Seo";
import { Steps } from "@/components/Steps";
import { Service } from "@/interfaces/PageDetails";
import { colors } from "@/theme";
import { getServiceDetails } from "@/utils/getPageDetails";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { RevealWrapper } from "next-reveal";

import Link from "next/link";
import { useRouter } from "next/router";

export default function ServicePage() {
  const { query } = useRouter();

  const serviceDetails =
    (getServiceDetails(query.slug as string) as Service) ?? {};

  return (
    <>
      <Seo />
      <Header>
        {({ onClose }) => (
          <>
            <Link
              href="/"
              onClick={onClose}
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "18px",
              }}
            >
              Domov
            </Link>
            <Link
              href="/sluzby"
              onClick={onClose}
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "18px",
              }}
            >
              Služby
            </Link>
            <Link
              href="/employee/1"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "18px",
              }}
            ></Link>
            <Link
              href="/#kontakt"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "18px",
              }}
            >
              Kontakt
            </Link>
            <Link
              href="/cenova-ponuka"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "18px",
              }}
            >
              Cenová ponuka
            </Link>
          </>
        )}
      </Header>
      <PromoSection
        title={serviceDetails.title}
        subtitle={serviceDetails.subtitle}
        primaryButtonProps={serviceDetails.primary_button}
        secondaryButtonProps={serviceDetails.secondary_button}
        promoBar={serviceDetails.promoBar}
      />
      <Box bgGradient={colors.gradients.layout}>
        <Layout display="flex" flexDir="column" alignItems="center">
          <RevealWrapper
            origin="bottom"
            delay={300}
            duration={1500}
            distance="500px"
            scale={1.25}
            viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
          >
            <Text
              mt="32"
              mb="8"
              textAlign="center"
              textStyle="base28"
              color="primary"
            >
              {serviceDetails.description?.title}
            </Text>
            <Text
              textAlign="center"
              textStyle="base22"
              color="gray_light_2"
              maxW={{ base: "100%", lg: "680px" }}
            >
              {serviceDetails.description?.subtitle}
            </Text>
          </RevealWrapper>
          {serviceDetails?.catalogUrl && (
            <RevealWrapper
              origin="bottom"
              delay={300}
              duration={1500}
              distance="500px"
              scale={1.25}
              viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
            >
              <Flex justifyContent="center" mt="20">
                <Flex
                  gap="4"
                  as={Button}
                  onClick={() => {
                    window.open(serviceDetails?.catalogUrl, "_blank");
                  }}
                >
                  <Image src="/assets/pdf.png" alt="pdf icon" w="120px" />
                  <Text>Katalóg k dverám</Text>
                </Flex>
              </Flex>
            </RevealWrapper>
          )}
          <RevealWrapper
            origin="bottom"
            delay={300}
            duration={1500}
            distance="500px"
            scale={1.25}
            viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
          >
            <Flex justifyContent="center" my="24">
              <PricePromoButton />
            </Flex>
          </RevealWrapper>
        </Layout>
        <RevealWrapper
          origin="bottom"
          delay={300}
          duration={1500}
          distance="500px"
          scale={1.25}
          viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
        >
          <Steps steps={serviceDetails.description?.steps ?? []} />
        </RevealWrapper>
        <RevealWrapper
          origin="bottom"
          delay={300}
          duration={1500}
          distance="500px"
          scale={1.25}
          viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
        >
          <References
            images={serviceDetails.description?.references.images ?? []}
          />
        </RevealWrapper>
      </Box>
    </>
  );
}
