import React from 'react';
import {
  ListItem,
  ListIcon,
  List,
  Heading,
  Text,
  Box,
  Center,
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';

function Benefits() {
  return (
    <Box m={5}>
      <Heading fontSize="2xl" fontWeight={600} fontStyle="italic">
        Benefits
      </Heading>
      <Center>
        <List spacing={5}>
          <ListItem>
            <ListIcon as={MdCheckCircle} boxSize={5} color="green.500" />
            <Text as="span" fontSize="xl">
              Grow and meet your target audience
            </Text>
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} boxSize={5} color="green.500" />
            <Text as="span" fontSize="xl">
              Stay informed and entertained
            </Text>
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} boxSize={5} color="green.500" />
            <Text as="span" fontSize="xl">
              Meet interesting people like you
            </Text>
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} boxSize={5} color="green.500" />
            <Text as="span" fontSize="xl">
              Helps you discover new sources of income
            </Text>
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} boxSize={5} color="green.500" />
            <Text as="span" fontSize="xl">
              Promote your business to real people
            </Text>
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} boxSize={5} color="green.500" />
            <Text as="span" fontSize="xl">
              Monetize your content by charging your loyal viewers
            </Text>
          </ListItem>
        </List>
      </Center>
    </Box>
  );
}

export default Benefits;
