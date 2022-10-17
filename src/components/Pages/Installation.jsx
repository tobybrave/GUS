import {
  AspectRatio, Box, Container, Heading, Text,
} from '@chakra-ui/react';
import React from 'react';

function Installation() {
  return (
    <Box className="App">
      <Box m={3} p={3}>
        <Heading as="h2" size="md" margin="1">
          How to install the VCF file
        </Heading>
        <Box>
          <Text fontWeight="hairline" fontSize="1rem" my={3}>
            Watch the short Youtube video below to see how vcf
            file is installed.
          </Text>
          <Container>
            <AspectRatio maxW="560px" ratio={1}>
              <iframe
                title="How to install vcf file"
                src="https://www.youtube.com/embed/TtpudIms4FI"
                allowFullScreen
              />
            </AspectRatio>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}

export default Installation;
