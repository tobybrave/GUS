import React from 'react';
import {
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  Link,
} from '@chakra-ui/react';
import { FaDownload, FaEdit } from 'react-icons/fa';
import { Link as ReactLink } from 'react-router-dom';
import { Illustration } from '../Icons/icons';

export default function CallToActionWithIllustration() {
  return (
    <Container maxW="5xl">
      <Stack
        textAlign="center"
        align="center"
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 20 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight="110%"
        >
          Need more viewers for
          {' '}
          <br />
          <Text as="span" color="green.400">
            your whatsapp status?
          </Text>
        </Heading>
        <Text color="gray.500" maxW="3xl">
          You can now grow your WhatsApp Audience
          and Views as You and other participants
          get to save each others contact in just
          one click
        </Text>
        <Stack spacing={6} direction="row">
          <Link as={ReactLink} to="/register" _hover={{ textDecoration: 'none' }}>
            <Button
              leftIcon={<FaEdit />}
              rounded="full"
              px={6}
              colorScheme="orange"
              bg="orange.400"
              _hover={{ bg: 'orange.500' }}
            >
              Register
            </Button>
          </Link>
          <Link as={ReactLink} to="/downloads" _hover={{ textDecoration: 'none' }}>
            <Button
              leftIcon={<FaDownload />}
              rounded="full"
              px={6}
              colorScheme="green"
              bg="green.300"
              _hover={{ bg: 'green.400' }}
            >
              Download
            </Button>
          </Link>
        </Stack>
        <Flex w="full">
          <Illustration
            height={{ sm: '24rem', lg: '28rem' }}
            mt={{ base: 12, sm: 16 }}
          />
        </Flex>
      </Stack>
    </Container>
  );
}
