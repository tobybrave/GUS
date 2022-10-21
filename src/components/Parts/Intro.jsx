import React from 'react';
import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  HStack,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import { FaDownload, FaEdit } from 'react-icons/fa';
import { Link as ReactLink } from 'react-router-dom';

function Intro() {
  return (
    <Box m={5}>
      <Heading mb={4}>
        Need More Viewers For Your WhatsApp Status?
      </Heading>
      <Divider />
      <Text fontSize="xl">
        You can now grow your WhatsApp Audience and Views as You and
        other participants get to save each others contact in just one
        click
      </Text>
      <Center>
        <HStack spacing={3} m={3}>
          <Link as={ReactLink} to="/downloads">
            <Button leftIcon={<FaDownload />} variant="solid">
              Download
            </Button>
          </Link>
          <Link href="#register">
            <Button leftIcon={<FaEdit />} variant="solid">
              Register
            </Button>
          </Link>
        </HStack>

      </Center>
      <Center>
        <Box margin="6" boxSize="sm" backgroundColor="gray.100">
          <Center>
            <Image
              src=""
              fallbackSrc="https://via.placeholder.com"
            />
          </Center>
        </Box>
      </Center>
    </Box>
  );
}

export default Intro;
