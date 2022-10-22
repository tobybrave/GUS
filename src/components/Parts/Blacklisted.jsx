import {
  Box, Heading, Table, TableContainer, Tbody, Td, Text, Tr,
} from '@chakra-ui/react';
import React from 'react';

function BlockedContactTable({ contacts }) {
  return (
    <Box m={1}>
      <TableContainer>
        <Table variant="simple">
          <Tbody>
            {contacts.map((contact) => (
              <Tr key={contact.id}>
                <Td>

                  <Text fontWeight="semibold" color="red">
                    Name & Phone number:
                    {' '}
                    {contact.name}
                    {' '}
                    {contact.phone}
                    <br />
                    Reason:
                    {' '}
                    {contact.reason}
                  </Text>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>

  );
}

function Blacklisted({ contacts }) {
  return (
    <Box m={5}>
      <Heading
        fontWeight={600}
        fontSize="3xl"
        textAlign="left"
      >
        Blacklisted Contacts
      </Heading>
      <Text color="gray.500" mt={3}>
        Here is a list of the last 5 blocked contacts who have been
        found violating our rules and will therefore not be included
        in future compilations
      </Text>
      <BlockedContactTable contacts={contacts} />
    </Box>
  );
}

export default Blacklisted;
