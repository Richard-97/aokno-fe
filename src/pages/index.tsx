import { AboutUsSection } from "@/components/AboutUsSection";
import { ContactUsForm } from "@/components/ContactUsForm";
import { ContactUsSection } from "@/components/ContactUsSection";
import { CustomersSection } from "@/components/CustomersSection";
import { Header } from "@/components/Header";
import { Layout } from "@/components/Layout";
import { Fade } from "react-awesome-reveal";
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
        subtitle="Pošlite žiadosť o nezáväznú cenovú ponuku a my sa Vám ozveme čo najskôr"
        primaryButtonProps={{ title: "Cenová ponuka", href: "/cenova-ponuka" }}
        secondaryButtonProps={{ title: "Kontaktujte nás", href: "#kontakt" }}
        promoBar="Aktuálne ponúkame -20% na plastové okná"
      />
      <Box bgGradient={colors.gradients.layout}>
        <Layout>
          <Fade triggerOnce duration={1200}>
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
          </Fade>
          <Fade duration={1200}>
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
          </Fade>
          <Fade duration={1200}>
            <Flex justifyContent="center" my="28">
              <PricePromoButton />
            </Flex>
          </Fade>
          <Fade duration={1200}>
            <AboutUsSection />
          </Fade>
          <Fade duration={1200}>
            <PartnersSection />
          </Fade>
          <Fade duration={1200}>
            <CustomersSection />
          </Fade>
        </Layout>
        <Fade duration={1200} cascade={false} damping={0.1} big>
          <ContactUsSection />
        </Fade>
      </Box>
    </Box>
  );
}
