import { Header } from "@/components/Header";
import { Image } from "@/components/Image";
import { Layout } from "@/components/Layout";
import { PricePromoButton } from "@/components/PricePromoButton";
import { PromoSection } from "@/components/PromoSection";
import { References } from "@/components/References";
import { Seo } from "@/components/Seo";
import { Spinner } from "@/components/Spinner";
import { Steps } from "@/components/Steps";
import { Service } from "@/interfaces/PageDetails";
import { colors } from "@/theme";
import { getServiceDetails } from "@/utils/getPageDetails";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

import Link from "next/link";
import { useRouter } from "next/router";
import { Fade } from "react-awesome-reveal";

export default function ServicePage() {
  const { query } = useRouter();

  if (!query.slug) {
    return (
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Spinner />
      </Flex>
    );
  }

  const serviceDetails = getServiceDetails(query.slug as string) as Service;

  return (
    <Box overflow="hidden">
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
          <Fade>
            <Flex flexDir="column" alignItems="center" textAlign="center">
              <Text mt="32" mb="8" textStyle="base28" color="primary">
                {serviceDetails.description?.title}
              </Text>
              <Text
                textStyle="base22"
                color="gray_light_2"
                maxW={{ base: "100%", lg: "680px" }}
              >
                {serviceDetails.description?.subtitle}
              </Text>
            </Flex>
          </Fade>
          {serviceDetails?.catalogUrl && (
            <Fade>
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
            </Fade>
          )}
          <Fade>
            <Flex justifyContent="center" my="24">
              <PricePromoButton />
            </Flex>
          </Fade>
        </Layout>
        <Fade>
          <Steps steps={serviceDetails.description?.steps ?? []} />
        </Fade>
        {serviceDetails.description?.references.images.length > 0 ? (
          <Fade>
            <References
              images={serviceDetails.description?.references.images ?? []}
            />
          </Fade>
        ) : null}
      </Box>
    </Box>
  );
}
