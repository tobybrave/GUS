import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import ReportContact from '../Parts/ReportContact';
import Benefits from '../Parts/Benefits';
import PackagesDiff from '../Parts/Packages';
import Procedures from '../Parts/Procedures';
import Share from '../Parts/Share';
import * as gusServices from '../../services/gusServices';
import CallToActionWithIllustration from '../Parts/CTA';
import Blacklisted from '../Parts/Blacklisted';

function Home() {
  const [blacklisted, setBlacklisted] = useState([]);

  useEffect(() => {
    gusServices.blacklisted()
      .then((result) => setBlacklisted(result.contacts))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Box className="App">
      <CallToActionWithIllustration />
      <Benefits />
      <PackagesDiff />
      <Procedures />
      <Share />
      {blacklisted.length >= 1 && (
      <Blacklisted contacts={blacklisted} />
      )}
      <ReportContact />
    </Box>
  );
}

export default Home;
