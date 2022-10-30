import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import {
  Image, Link,
} from '@chakra-ui/react';

export default function Logo() {
  return (
    <Link as={ReactLink} to="/">
      <Image
        // boxSize="70px"
        h="80px"
        w="80px"
        objectFit="contain"
          // height={55}
          // width={55}
          // w="auto"
        src="/images/gus.png"
      />
    </Link>
  );
}
