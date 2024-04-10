import { Box, Button } from "@chakra-ui/react";
import { DoubleRightIcon } from "./Icons/DoubleRighticon";
import { FireIcon } from "@/components/Icons/Fire";
import Link from "next/link";

export const PricePromoButton = () => (
  <Button
    leftIcon={
      <Box transform="scale(0.7)">
        <FireIcon />
      </Box>
    }
    rightIcon={
      <Box transform="scale(0.6)">
        <DoubleRightIcon />
      </Box>
    }
    variant="tertiary"
    px="6"
    py="8"
    as={Link}
    href="/cenova-ponuka"
    fontSize={{ base: "14px", md: "16px", xl: "20px" }}
  >
    Mám záujem o cenovú ponuku
  </Button>
);
