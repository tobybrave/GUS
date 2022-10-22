import {
  AspectRatio, Box, Container, Heading, Stack, Text,
} from '@chakra-ui/react';
import React from 'react';

function Installation() {
  return (
    <Box>
      <Box m={3} p={3}>
        <Stack align="center" m={5}>
          <Heading id="register" fontSize="2xl" textAlign="center">
            How to install the VCF file
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Watch the short Youtube video below to see how vcf
            file is installed.
          </Text>
        </Stack>
        <Box m={3}>
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
