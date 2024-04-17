import { AboutUsSection } from "@/components/AboutUsSection";
import { ContactUsForm } from "@/components/ContactUsForm";
import { ContactUsSection } from "@/components/ContactUsSection";
import { CustomersSection } from "@/components/CustomersSection";
import { Header } from "@/components/Header";
import { Layout } from "@/components/Layout";
import { RevealWrapper } from "next-reveal";
import { PartnersSection } from "@/components/PartnersSection";
import { PricePromoButton } from "@/components/PricePromoButton";
import { PromoSection } from "@/components/PromoSection";
import { Seo } from "@/components/Seo";
import { ServicesSection } from "@/components/ServicesSection";
import { colors } from "@/theme";
import { getHomePageDetails } from "@/utils/getPageDetails";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function HomePage() {
  const pageDetails = getHomePageDetails();

  return (
    <Box overflow="hidden">
      <Seo />
      <Header>
        {({ onClose }) => (
          <>
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
              href="/sluzby"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "18px",
              }}
            ></Link>
            <Link
              href="#kontakt"
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
        title="Plastové okná & dvere"
        subtitle="Pošlite žiadost o nezáveznu cenovú ponuku a my sa Vám ozveme čo najskor"
        primaryButtonProps={{ title: "Cenová ponuka", href: "/cenova-ponuka" }}
        secondaryButtonProps={{ title: "Kontaktujte nás", href: "#kontakt" }}
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
            <ServicesSection
              mt="120px"
              services={pageDetails.services.items.slice(0, 3)}
            >
              <Text color="gray_light_2" maxW="680px" textAlign="center" mt="6">
                Preskúmajte našu širokú ponuku služieb a objavte ďalšie možnosti
                kliknutím na tlačidlo nižšie.
              </Text>
              <Button
                variant="tertiary"
                fontSize="18px"
                mt="8"
                as={Link}
                href="/sluzby"
              >
                Viac služieb
              </Button>
            </ServicesSection>
          </RevealWrapper>
          <RevealWrapper
            origin="bottom"
            delay={300}
            duration={1500}
            distance="500px"
            scale={1.25}
            viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
          >
            <Text color="gray_light_2" textAlign="center" mt="16" mb="2">
              Vypňte formulár a my sa Vám ozveme
            </Text>
            <Text
              fontFamily="primary"
              textAlign="center"
              color="primary"
              mb="4"
            >
              <Text as="span" fontSize="24x" fontWeight="semibold">
                Konzultácia
              </Text>{" "}
              <Text as="span" fontSize="24x" fontWeight="extrabold">
                ZDARMA
              </Text>
            </Text>
            <ContactUsForm />
          </RevealWrapper>
          <RevealWrapper
            origin="bottom"
            delay={300}
            duration={1500}
            distance="500px"
            scale={1.25}
            viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
          >
            <Flex justifyContent="center" my="28">
              <PricePromoButton />
            </Flex>
          </RevealWrapper>
          <RevealWrapper
            origin="bottom"
            delay={300}
            duration={1500}
            distance="500px"
            scale={1.25}
            viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
          >
            <AboutUsSection />
          </RevealWrapper>
          <RevealWrapper
            origin="bottom"
            delay={300}
            duration={1500}
            distance="500px"
            scale={1.25}
            viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
          >
            <PartnersSection />
          </RevealWrapper>
          <RevealWrapper
            origin="bottom"
            delay={300}
            duration={1500}
            distance="500px"
            scale={1.25}
            viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
          >
            <CustomersSection />
          </RevealWrapper>
        </Layout>
        <RevealWrapper
          // origin="bottom"
          delay={300}
          duration={1500}
          distance="500px"
          scale={1.25}
          // viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
        >
          <ContactUsSection />
        </RevealWrapper>
      </Box>
    </Box>
  );
}
