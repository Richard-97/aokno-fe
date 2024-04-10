import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-Inter",
});

export const fonts = {
  title: `'SportyProLight'`,
  primary: inter.style.fontFamily,
  body: `'SportyProLight'`,
};
