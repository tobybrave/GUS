import {
  Box,
  Link,
  Heading,
  Spacer,
  Text,
  HStack,
  Flex,
} from '@chakra-ui/react';
import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

function Footer() {
  return (
    <Box as="footer" role="contentinfo" bg="#1b2d38" textAlign="center">
      {/* <Container> */}
      <Flex
        direction={['column', 'column', 'column']}
        w="full"
        p={5}
        align="center"
        color="white"
      >
        <Heading size="md">Follow and contact us</Heading>
        <Spacer />
        <HStack spacing={5} margin={3}>
          <Link to="/">
            <FaTwitter size={35} />
          </Link>
          <Link to="/">
            <FaFacebook size={35} />
          </Link>
          <Link href="mailto:help@growursocials.com">
            <HiOutlineMail size={35} />
          </Link>
        </HStack>
        <Spacer />
        <Text fontSize="sm" fontStyle="italic">
          Copyright &copy; 2022 GUS
        </Text>
        <Text fontSize="md" fontWeight="hairline">
          Disclaimer: All transactions carried out involving
          any GUS contact is at your discretion.
        </Text>
      </Flex>
    </Box>
  );
}

export default Footer;
