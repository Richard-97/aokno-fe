import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { Box, Button, Flex, Grid } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperArrowLeft } from "./Icons/SwiperArrowLeft";
import { SwiperArrowRight } from "./Icons/SwiperArrowright";

const CarouselWrapper = styled(Box)`
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    //   width: 100%;
    height: 100%;
  }

  .swiper-slide {
    width: 60%;
  }
`;

type PropType = {
  slides: string[];
};

export const Carousel: React.FC<PropType> = (props) => {
  const { slides } = props;
  return (
    <CarouselWrapper w="100%">
      <Flex alignItems="center">
        <Box className="arrow-right arrow" as={Button} mr="4">
          <SwiperArrowLeft />
        </Box>
        <Swiper
          navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
          //   navigation
          slidesPerView="auto"
          spaceBetween={30}
          pagination={{
            clickable: true,
            el: ".swiper-custom-pagination",
          }}
          modules={[Navigation, Pagination]}
          className="preview-swipper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide}>
              <Box
                border="1px solid primary"
                overflow="hidden"
                position="relative"
                width="100%"
                aspectRatio="16/9"
              >
                <Image
                  src={slide}
                  alt="image"
                  fill
                  loading="lazy"
                  priority={false}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{
                    border: "none",
                    //   objectFit: "cover",
                  }}
                />
              </Box>
            </SwiperSlide>
          ))}
          <Grid textAlign="center" gap="5" mt="3">
            <Box className="swiper-custom-pagination" />
          </Grid>
        </Swiper>
        <Box className="arrow-left arrow" as={Button} ml="4">
          <SwiperArrowRight />
        </Box>
      </Flex>
    </CarouselWrapper>
  );
};
