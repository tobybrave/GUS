import React from 'react';
import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import { FaDownload, FaEdit } from 'react-icons/fa';

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
      <Button margin="3">
        <FaDownload />
        Download
      </Button>
      <Button margin="3">
        <FaEdit />
        Submit
      </Button>

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
