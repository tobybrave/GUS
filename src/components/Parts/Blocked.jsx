import {
  Box, Table, TableContainer, Tbody, Td, Text, Tr,
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

function Blocked({ contacts }) {
  return (
    <section className="mini-box-share">
      <div className="wrap mt300">
        <h1 className="left-align">Blocked Contacts</h1>
        <p className="left-align b600">
          Here is a list of the last 5 blocked contacts who have been
          found violating our rules and will therefore not be included
          in future compilations
        </p>
        <BlockedContactTable contacts={contacts} />
      </div>
    </section>
  );
}

export default Blocked;
