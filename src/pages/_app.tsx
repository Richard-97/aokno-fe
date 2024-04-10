import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import {
  colors,
  components,
  textStyles,
  breakpoints,
  fonts,
  global,
} from "@/theme";
import { Global } from "@emotion/react";

const chakraTheme = {
  colors,
  components,
  textStyles,
  breakpoints,
  fonts,
  global,
};

const theme = extendTheme(chakraTheme);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Global
        styles={`
        
        @font-face {
          font-family: SportyProLight;
          src: url("/fonts/sporty-pro-light.otf") format("opentype");
      }
      
      @font-face {
          font-family: SportyProLight;
          font-weight: bold;
          src: url("/fonts/sporty-pro-light.otf") format("opentype");
      }
      `}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
