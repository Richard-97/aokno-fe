import { Header } from "@/components/Header";
import { Layout } from "@/components/Layout";
import { PricePromoButton } from "@/components/PricePromoButton";
import { PromoSection } from "@/components/PromoSection";
import { References } from "@/components/References";
import { Seo } from "@/components/Seo";
import { ServicesSection } from "@/components/ServicesSection";
import { colors } from "@/theme";
import { getHomePageDetails } from "@/utils/getPageDetails";
import { Box, Flex } from "@chakra-ui/react";
import { RevealWrapper } from "next-reveal";
import Link from "next/link";

export default function ServicePage() {
  const pageDetails = getHomePageDetails();

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
        title="Naše služby"
        subtitle="V našej ponuke nájdete následovné služby"
        primaryButtonProps={{ title: "Cenová ponuka", href: "/cenova-ponuka" }}
        secondaryButtonProps={{ title: "Naša práca", href: "#referencie" }}
        promoBar="Aktuálne ponúkame -20% na plastové okná"
      />
      <Box bgGradient={colors.gradients.layout}>
        <Layout>
          <RevealWrapper
            origin="bottom"
            delay={300}
            duration={1500}
            distance="500px"
            scale={1.25}
            viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
          >
            <ServicesSection mt="120px" services={pageDetails.services.items} />
          </RevealWrapper>
          <RevealWrapper
            origin="bottom"
            delay={300}
            duration={1500}
            distance="500px"
            scale={1.25}
            viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
          >
            <Flex justifyContent="center" my="16">
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
          <References images={pageDetails.services.references.images} />
        </RevealWrapper>
      </Box>
    </>
  );
}
