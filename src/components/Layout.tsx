import { FC, ReactNode } from "react";
import { BoxProps, Container, LayoutProps } from "@chakra-ui/react";

interface Props extends LayoutProps, BoxProps {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ maxW = "7xl", children, ...props }) => (
  <Container maxW={maxW} {...props}>
    {children}
  </Container>
);
