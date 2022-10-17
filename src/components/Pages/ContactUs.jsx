import {
  Box, Center, Heading, HStack, Link, Text,
} from '@chakra-ui/react';
import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

function Cont() {
  return (
    <Box className="App">
      <Box m={3}>
        <Heading as="h2">Contact Us</Heading>
        <Text fontSize="md">
          For help or inquiries please email us or reach us via our
          social media handles
        </Text>
        <Text fontStyle="italic" fontWeight="semibold">
          Email: help@growursocials.com
        </Text>
        <Center m={5}>
          <HStack spacing={5}>
            <Link href="https://twitter.com/growursocials">
              <FaTwitter size={40} />
            </Link>
            <Link href="https://www.facebook.com/growursocials">
              <FaFacebook size={40} />
            </Link>
            <Link href="mailto:help@growursocials.com">
              <HiOutlineMail size={40} />
            </Link>
          </HStack>
        </Center>
        <Box height="225px" />
      </Box>
    </Box>
  );
}

export default Cont;
