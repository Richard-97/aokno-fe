import React, { FC, ReactNode } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { RenderProps } from "@/components/Header";

interface Props {
  children: ({ onClose }: RenderProps) => ReactNode;
}

export const MobileMenu: FC<Props> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <IconButton
        bg="transparent"
        color="white"
        aria-label="Open menu"
        icon={<HamburgerIcon boxSize="7" color="white" />}
        onClick={onOpen}
      />
      <ChakraDrawer onClose={onClose} isOpen={isOpen} size="full">
        <DrawerOverlay />
        <DrawerContent bg="transparent">
          <DrawerHeader></DrawerHeader>
          <DrawerCloseButton fontSize="28" color="secondary" mt="4" mr="2" />
          <DrawerBody>{children({ onClose })}</DrawerBody>
        </DrawerContent>
      </ChakraDrawer>
    </Box>
  );
};
