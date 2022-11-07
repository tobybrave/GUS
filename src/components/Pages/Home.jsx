import React from 'react';
import { Box } from '@chakra-ui/react';
import Benefits from '../Parts/Benefits';
import PackagesDiff from '../Parts/Packages';
import Procedures from '../Parts/Procedures';
import Share from '../Parts/Share';
import CallToActionWithIllustration from '../Parts/CTA';
import Carousel from '../Parts/Carousel';

function Home() {
  return (
    <Box className="App">
      <CallToActionWithIllustration />
      <Benefits />
      <Carousel />
      <PackagesDiff />
      <Procedures />
      <Share />
    </Box>
  );
}

export default Home;
