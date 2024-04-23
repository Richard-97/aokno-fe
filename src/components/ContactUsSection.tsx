import { FC, ReactNode } from "react";
import { Box, BoxProps, Flex, Text } from "@chakra-ui/react";
import { SectionTitle } from "@/components/SectionTitle";
import { Layout } from "@/components/Layout";
import { LocationIcon } from "@/components/Icons/LocationIcon";
import { MailIcon } from "@/components/Icons/MailIcon";
import { PhoneIcon } from "@/components/Icons/PhoneIcon";
import { InfoLinkBox } from "@/components/InfoLinkBox";
import { Image } from "@/components/Image";
import {
  COMPANY_ADDRESS,
  COMPANY_EMAIL,
  COMPANY_GOOGLE_MAPS_SHARE_LINK,
  COMPANY_PHONE_NUMBER_PRIMARY,
} from "@/constants/common";
import Link from "next/link";
import { ClockIcon } from "./Icons/ClockIcon";
import { TimeBox } from "./TimeBox";

interface Props extends BoxProps {
  children?: ReactNode;
}

export const ContactUsSection: FC<Props> = ({ children, ...props }) => (
  <Flex
    flexDir="column"
    alignItems="center"
    py="16"
    bg="primary"
    id="kontakt"
    {...props}
  >
    <Layout>
      <SectionTitle
        titleComponent="Pre bližšie informácie nás neváhajte kontaktovať"
        titleColor="white"
      />
      <Flex
        flexDir="column"
        alignItems="center"
        gap="16"
        mt="8"
        flexWrap="wrap"
      >
        <Flex gap="20" flexWrap="wrap" justifyContent="center">
          <InfoLinkBox
            label={COMPANY_ADDRESS}
            href={COMPANY_GOOGLE_MAPS_SHARE_LINK}
            icon={<LocationIcon />}
            shouldOpenInNewTab
          />
          <InfoLinkBox
            label={COMPANY_PHONE_NUMBER_PRIMARY}
            icon={<PhoneIcon />}
            href={`tel:${COMPANY_PHONE_NUMBER_PRIMARY}`}
          />
          <InfoLinkBox
            label={COMPANY_EMAIL}
            icon={<MailIcon />}
            href={`mailto:${COMPANY_EMAIL}`}
          />
        </Flex>
        <Link href={COMPANY_GOOGLE_MAPS_SHARE_LINK}>
          <Image alt="office" src="/assets/office-map.png" width="600px" />
        </Link>
      </Flex>
      <Flex alignItems="center" flexDir="column">
        <Text textStyle="base18" mb="6" color="white">
          Otváracie hodiny
        </Text>
        <Flex flexDir="column" color="white" gap="3">
          <TimeBox title="Pondelok" time="8:30 - 15:30" />
          <TimeBox title="Utorok" time="9:00 - 15:30" />
          <TimeBox title="Streda" time="9:00 - 15:30" />
          <TimeBox title="Štvrtok" time="9:00 - 15:30" />
          <TimeBox title="Piatok" time="9:00 - 15:30" />
        </Flex>
      </Flex>
    </Layout>
  </Flex>
);
