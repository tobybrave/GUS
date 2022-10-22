import React from 'react';
import {
  Box, Center, Heading, SimpleGrid, Text,
} from '@chakra-ui/react';
import {
  FaAddressCard, FaKey, FaPencilAlt, FaSuitcase,
} from 'react-icons/fa';

function Procedures() {
  return (
    <Box m={5} mb={10}>
      <Heading textAlign="left" as="h3" fontSize="3xl" fontWeight={600} margin="1">
        Procedures
      </Heading>
      <SimpleGrid
        minChildWidth="180px"
        spacingX={10}
        spacingY={5}
        m="25px"
      >
        <Box height="auto" bg="whitesmoke" borderRadius="md" p={2}>
          <Center>
            <FaSuitcase size={20} />
          </Center>
          <Text fontWeight="semibold">Select Plan</Text>
          <Text>
            Choose between the free plan and the premium plan
            according to what best suits your needs. Remember that
            the premium plan has more to offer
          </Text>
        </Box>
        <Box height="auto" bg="whitesmoke" borderRadius="md" p={2}>
          <Center>
            <FaPencilAlt size={20} />
          </Center>
          <Text fontWeight="semibold">
            Fill in correct information
          </Text>
          <Text>
            Fill in your correct information when submitting your
            contact information to ensure that you get the best out
            of our services
          </Text>
        </Box>
        <Box height="auto" bg="whitesmoke" borderRadius="md" p={2}>
          <Center>
            <FaKey size={20} />
          </Center>
          <Text fontWeight="semibold">Secure you password</Text>
          <Text>
            After your successful payment, you will be given a
            unique password which will be required to download the
            contact file
          </Text>
        </Box>
        <Box height="auto" bg="whitesmoke" borderRadius="md" p={2}>
          <Center>
            <FaAddressCard size={20} />
          </Center>
          <Text fontWeight="semibold">
            Download the compiled contact
          </Text>
          <Text>
            Come back to Download and install the contact file which
            will be uploaded by 11:55pm in a .vcf format. This
            contact file will also be saved by others
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default Procedures;
