import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import ReportContact from '../Parts/ReportContact';
import Blocked from '../Parts/Blocked';
import Benefits from '../Parts/Benefits';
import PackageDiff from '../Parts/PackageDiff';
import ContactForm from '../Parts/ContactForm';
import Intro from '../Parts/Intro';
import Procedures from '../Parts/Procedures';
import Share from '../Parts/Share';
import * as gusServices from '../../services/gusServices';

function Home() {
  const [blockedContacts, setBlockedContact] = useState([]);

  useEffect(() => {
    gusServices.blocked()
      .then((result) => setBlockedContact(result.contacts))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Box className="App">
      <Intro />
      <Benefits />
      <PackageDiff />
      <Procedures />
      <ContactForm />
      <Share />
      {blockedContacts.length >= 1 && (
      <Blocked contacts={blockedContacts} />
      )}
      <ReportContact />
    </Box>
  );
}

export default Home;
