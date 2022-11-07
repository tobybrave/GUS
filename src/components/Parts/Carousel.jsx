import React, { useState } from 'react';
import {
  Box, Image, useBreakpointValue,
} from '@chakra-ui/react';
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState(null);

  const cards = [
    '/images/GUS_ADS1.jpg',
    '/images/GUS_ADS2.jpg',
    '/images/GUS_ADS3.jpg',
  ];

  return (
    <Box
      p={useBreakpointValue({ base: 4, md: 20 })}
      position="relative"
      overflow="hidden"
      // h="auto"
      // width="full"
    >
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Slider {...settings} ref={() => setSlider(slider)}>
        {cards.map((url, index) => (
          /* eslint-disable react/no-array-index-key */
          <Box key={index} objectFit="contain">
            <Image src={url} alt="growursocials ads" />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
