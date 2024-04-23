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
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

export default function ServicePage() {
  const pageDetails = getHomePageDetails();

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
          <Fade triggerOnce duration={1200}>
            <ServicesSection mt="120px" services={pageDetails.services.items} />
          </Fade>
          <Fade triggerOnce>
            <Flex justifyContent="center" my="16">
              <PricePromoButton />
            </Flex>
          </Fade>
        </Layout>
        <Fade triggerOnce>
          <References images={pageDetails.services.references.images} />
        </Fade>
      </Box>
    </Box>
  );
}
