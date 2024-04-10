import { accordionAnatomy } from "@chakra-ui/anatomy";
import { background, createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { colors } from ".";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys);

const accordionStyles = definePartsStyle({
  root: {
    borderRadius: 10,
    display: "flex",
    flexDir: "column",
    gap: "3",
  },
  container: {
    boxShadow: "sm",

    border: "none",
    bg: "gray_light_3",
    borderRadius: "10",
  },
  panel: {
    borderTop: `1px solid ${colors.gray_light_4}`,
  },
});

export const accordionTheme = defineMultiStyleConfig({
  baseStyle: accordionStyles,
});

export const components = {
  Checkbox: {
    baseStyle: {
      control: {
        borderColor: "primary",
      },
    },
  },
  Button: {
    baseStyle: {
      _hover: {
        transform: "scale(1.02)",
      },
    },
    variants: {
      primary: {
        fontSize: "24px",
        bg: "primary",
        color: "white",
        borderRadius: "6px",
      },
      secondary: {
        fontSize: "24px",
        bg: "white",
        color: "primary",
        borderRadius: "6px",
      },
      tertiary: {
        fontSize: "24px",
        bg: "secondary",
        color: "primary",
        borderRadius: "6px",
      },
    },
    defaultProps: {
      variant: "primary",
    },
  },
  Drawer: {
    variants: {
      aside: {
        dialog: {
          pointerEvents: "auto",
        },
        dialogContainer: {
          pointerEvents: "none",
        },
      },
    },
    baseStyle: {
      overlay: {
        bg: "primary",
      },
    },
  },
  Accordion: accordionTheme,
  VideoFrame: {
    baseStyle: {
      m: "0",
    },
  },
};
