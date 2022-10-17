import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Heading,
  Box,
} from '@chakra-ui/react';

function PackageDiff() {
  return (
    <Box m={5}>
      <Heading textAlign="left" as="h3" size="md" margin="1">
        Go Premium
      </Heading>
      <TableContainer>
        <Table variant="striped" colorScheme="gray">
          <Thead>
            <Tr>
              <Th>Free</Th>
              <Th>Premium</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Name: Maximum of 8 characters</Td>
              <Td>Unlimited</Td>
            </Tr>
            <Tr>
              <Td>For personal use</Td>
              <Td>
                For Businesses, WhatsApp Media or TVs, Brands,
                Personalities etc
              </Td>
            </Tr>
            <Tr>
              <Td>Totally free</Td>
              <Td>You have to pay a token of ₦200 only</Td>
            </Tr>
            <Tr>
              <Td>
                All Contacts are automatically saved with a
                &quot;GUS&quot; suffix eg:Clinton GUS
              </Td>
              <Td>
                Premium plan allows spaced names and the suffix
                eg: Clinton Stores GUS
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default PackageDiff;
