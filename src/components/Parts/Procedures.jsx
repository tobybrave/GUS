import React from 'react';
import {
  Heading, Icon, SimpleGrid, Text, VStack,
} from '@chakra-ui/react';
import {
  FaAddressCard, FaKey, FaPencilAlt, FaSuitcase,
} from 'react-icons/fa';

export default function Procedures() {
  return (
    <section>
      <Heading textAlign="center" fontWeight={600} fontSize={{ base: '3xl', md: '3xl', lg: '4xl' }}>
        Procedures
      </Heading>
      <SimpleGrid gap={5} columns={[1, 1, 2, 4]} px={6} py={8} mx="auto">
        <VStack spacing={4} align="center">
          <Icon as={FaSuitcase} h={7} w={7} viewBox="0 0 30 30" />
          <Heading as="h3" size="md">
            Select Plan
          </Heading>
          <Text>
            Choose between the free plan and the premium plan
            according to what best suits your needs.
          </Text>
        </VStack>

        <VStack spacing={4} align="center">
          <Icon as={FaPencilAlt} h={7} w={7} viewBox="0 0 30 30" />
          <Heading as="h3" size="md">
            Submit contact
          </Heading>
          <Text>
            Fill in your correct details when submitting your
            contact to ensure that you get the best out
            of our services.
          </Text>
        </VStack>

        <VStack spacing={4} align="center">
          <Icon as={FaKey} h={7} w={7} viewBox="0 0 30 30" />

          <Heading as="h3" size="md">
            Secure your password
          </Heading>

          <Text>
            Provide your password to unlock every single vcard
            file when you are ready to do so.
          </Text>
        </VStack>
        <VStack spacing={4} align="center">
          <Icon as={FaAddressCard} h={7} w={7} viewBox="0 0 30 30" />

          <Heading as="h3" size="md">
            Download vcards
          </Heading>

          <Text>
            Download the contact file which
            will be uploaded daily in a .vcf format. This
            contact file will also be saved by others.
          </Text>
        </VStack>
      </SimpleGrid>
    </section>
  );
}
