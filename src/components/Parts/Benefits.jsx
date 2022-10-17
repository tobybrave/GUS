import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Icon,
  Text,
  Box,
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';

function Benefits() {
  return (
    <Box m={5}>
      <TableContainer>
        <Table variant="simple">
          <Thead bgColor="whitesmoke">
            <Tr>
              <Th fontSize="20px">Benefits</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Icon
                  as={MdCheckCircle}
                  mr="2"
                  color="green.500"
                />
                <Text as="span" fontSize="md">
                  More popularity = More money
                </Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Icon
                  as={MdCheckCircle}
                  mr="2"
                  color="green.500"
                />
                <Text as="span" fontSize="md">
                  More interesting statuses to view
                </Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Icon
                  as={MdCheckCircle}
                  mr="2"
                  color="green.500"
                />
                <Text as="span" fontSize="md">
                  More sales for business owners
                </Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Icon
                  as={MdCheckCircle}
                  mr="2"
                  color="green.500"
                />
                <Text as="span" fontSize="md">
                  More people get to know about you and your
                  business
                </Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Icon
                  as={MdCheckCircle}
                  mr="2"
                  color="green.500"
                />
                <Text as="span" fontSize="md">
                  If you&apos;re self employed, you can have better
                  opportunities
                </Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Icon
                  as={MdCheckCircle}
                  mr="2"
                  color="green.500"
                />
                <Text as="span" fontSize="md">
                  Helps you discover new sources of income
                </Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Icon
                  as={MdCheckCircle}
                  mr="1"
                  color="green.500"
                />
                <Text as="span" fontSize="md">
                  Helps you find more interesting people like
                  you
                </Text>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Benefits;
