import { Container, Flex } from '@chakra-ui/react';
import React from 'react';
import Placeholder from './Placeholder';

function Main() {
  return (
    <Flex
      as="main"
      role="main"
      direction="column"
      flex="1"
      py="16"
      bg="blue.700"
    //   {...props}
    >
      <Container flex="1">
        <Placeholder minH="lg" bg="bg-accent">
          Main
        </Placeholder>
      </Container>
    </Flex>
  );
}

export default Main;
