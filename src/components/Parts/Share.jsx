import React from 'react';
import {
  Button,
  Flex,
  FormControl,
  Heading,
  Link,
  Text,
  Textarea,
  Stack,
  HStack,
  useColorModeValue,
  useClipboard,
} from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';

export default function Share() {
  const placeholder = 'Are You Tired of Getting Embarrassing WhatsApp Status Views?\n     🤷🏻‍♂️🤷🏻‍♂️\nVisit https://growursocials.com';
  const { hasCopied, onCopy } = useClipboard(placeholder);

  return (
    <Flex
      // minH="50vh"
      align="center"
      justify="center"
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack
        spacing={4}
        w="full"
        maxW="md"
        bg={useColorModeValue('white', 'gray.700')}
        rounded="xl"
        boxShadow="md"
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: 'xl', md: '2xl' }}>
          Would you like to share with your friends?
        </Heading>
        <FormControl id="share">
          <Textarea
            isReadOnly
            _placeholder={{ color: 'gray.500' }}
            placeholder={placeholder}
          />
          <Flex direction="row-reverse"><Button m={2} onClick={onCopy}>{hasCopied ? 'copied!' : 'copy'}</Button></Flex>
        </FormControl>
        <Text
          fontWeight="semibold"
          fontSize={{ base: 'sm', sm: 'md' }}
          color={useColorModeValue('gray.800', 'gray.400')}
        >
          Or use the share button below
        </Text>
        <HStack spacing={4} alignSelf="center">
          <Button colorScheme="whatsapp" variant="link">
            <Link
              href="https://wa.me/?text=Are%20You%20Tired%20of%20Getting%20Embarrassing%20WhatsApp%20Status%20Views%3F%20%F0%9F%98%B3%F0%9F%98%B3%F0%9F%A4%B7%F0%9F%8F%BB%E2%80%8D%E2%99%82%EF%B8%8F%F0%9F%A4%B7%F0%9F%8F%BB%E2%80%8D%E2%99%82%EF%B8%8F%F0%9F%91%89%20https%3A%2F%2Fgrowursocials.com"
              isExternal
            >
              <FaWhatsapp size={30} />
            </Link>
          </Button>
          <Button colorScheme="facebook" variant="link">
            <Link
              href="https://www.facebook.com/sharer/sharer.php?u=https://growursocials/?quote=Are%20You%20Tired%20of%20Getting%20Embarrassing%20WhatsApp%20Status%20Views%3F%20%F0%9F%98%B3%F0%9F%98%B3%F0%9F%A4%B7%F0%9F%8F%BB%E2%80%8D%E2%99%82%EF%B8%8F%F0%9F%A4%B7%F0%9F%8F%BB%E2%80%8D%E2%99%82%EF%B8%8F%F0%9F%91%89%20https%3A%2F%2Fgrowursocials.com"
              isExternal
            >
              <FaFacebook size={30} />
            </Link>
          </Button>
          <Button colorScheme="twitter" variant="link">
            <Link
              href="https://twitter.com/intent/tweet?text=Are%20You%20Tired%20of%20Getting%20Embarrassing%20WhatsApp%20Status%20Views%3F%20%F0%9F%98%B3%F0%9F%98%B3%F0%9F%A4%B7%F0%9F%8F%BB%E2%80%8D%E2%99%82%EF%B8%8F%F0%9F%A4%B7%F0%9F%8F%BB%E2%80%8D%E2%99%82%EF%B8%8F%F0%9F%91%89%20https%3A%2F%2Fgrowursocials.com"
              isExternal
            >
              <FaTwitter size={30} />
            </Link>
          </Button>
        </HStack>
      </Stack>
    </Flex>
  );
}
