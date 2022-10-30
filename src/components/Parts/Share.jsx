import React from 'react';
import {
  Box, Button, Heading, Link, Text, Textarea,
} from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';

function Share() {
  return (
    <Box maxWidth="80%" m={5} mt={10}>
      <Heading textAlign="left" as="h3" size="md" mt={3} mb={3}>
        Would you like to share with your friends?
      </Heading>
      <Textarea
        ml={5}
        mr={5}
        isReadOnly
        placeholder={
                    'Are You Tired of Getting Embarrassing WhatsApp Status Views?\n     🤷🏻‍♂️🤷🏻‍♂️\nVisit https://growursocials.com'
                }
      />
      <Box>
        <Text fontWeight="semibold" textAlign="center" mt={5}>
          Or use the share buttons below
        </Text>
        <Button colorScheme="whatsapp" m="2" variant="link">
          <Link
            href="https://wa.me/?text=Are%20You%20Tired%20of%20Getting%20Embarrassing%20WhatsApp%20Status%20Views%3F%20%F0%9F%98%B3%F0%9F%98%B3%F0%9F%A4%B7%F0%9F%8F%BB%E2%80%8D%E2%99%82%EF%B8%8F%F0%9F%A4%B7%F0%9F%8F%BB%E2%80%8D%E2%99%82%EF%B8%8F%F0%9F%91%89%20https%3A%2F%2Fgrowursocials.com"
            isExternal
          >
            <FaWhatsapp size={30} />
          </Link>
        </Button>
        <Button colorScheme="facebook" m="2" variant="link">
          <Link
            href="https://www.facebook.com/sharer/sharer.php?url=https://growursocials/?text=Are%20You%20Tired%20of%20Getting%20Embarrassing%20WhatsApp%20Status%20Views%3F%20%F0%9F%98%B3%F0%9F%98%B3%F0%9F%A4%B7%F0%9F%8F%BB%E2%80%8D%E2%99%82%EF%B8%8F%F0%9F%A4%B7%F0%9F%8F%BB%E2%80%8D%E2%99%82%EF%B8%8F%F0%9F%91%89%20https%3A%2F%2Fgrowursocials.com"
            isExternal
          >
            <FaFacebook size={30} />
          </Link>
        </Button>
        <Button colorScheme="twitter" m="2" variant="link">
          <Link
            href="https://twitter.com/intent/tweet?text=Are%20You%20Tired%20of%20Getting%20Embarrassing%20WhatsApp%20Status%20Views%3F%20%F0%9F%98%B3%F0%9F%98%B3%F0%9F%A4%B7%F0%9F%8F%BB%E2%80%8D%E2%99%82%EF%B8%8F%F0%9F%A4%B7%F0%9F%8F%BB%E2%80%8D%E2%99%82%EF%B8%8F%F0%9F%91%89%20https%3A%2F%2Fgrowursocials.com"
            isExternal
          >
            <FaTwitter size={30} />
          </Link>
        </Button>
      </Box>
    </Box>
  );
}

export default Share;
