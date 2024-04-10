import { FC } from "react";
import NextImage, { StaticImageData } from "next/image";
import { Box, BoxProps } from "@chakra-ui/react";

interface Props extends BoxProps {
  src: string | StaticImageData;
  alt: string;
  width?: string;
  height?: string;
  priority?: boolean;
  borderRadius?: string;
  placeholder?: "blur" | "empty" | undefined;
}

export const Image: FC<Props> = ({
  src,
  alt,
  width = "auto",
  height = "auto",
  priority,
  placeholder,
  borderRadius,
  ...boxProps
}) => (
  <Box pointerEvents="none" {...boxProps}>
    <NextImage
      placeholder={placeholder}
      priority={priority}
      src={src}
      alt={alt}
      width={400}
      height={0}
      style={{ width, height, borderRadius }}
    />
  </Box>
);
