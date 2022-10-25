import React, { useEffect, useState, useRef } from 'react';
import { FaAddressCard, FaListUl } from 'react-icons/fa';
import moment from 'moment';
import {
  Box,
  Heading,
  Icon,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
  Stack,
  Button,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  ModalFooter,
  FormHelperText,
  useColorMode,
  Circle,
  HStack,
  useColorModeValue,
  Flex,
  createIcon,
  Alert,
  AlertIcon,
  AlertDescription,
} from '@chakra-ui/react';
import * as gusServices from '../../services/gusServices';

const PAGE_SIZE = 10;
const totalPages = (cards) => {
  if (!cards || !Array.isArray(cards)) return 0;
  const numFullPages = Math.floor(cards.length / PAGE_SIZE);
  const hasExtraPage = cards.length % PAGE_SIZE !== 0;
  return hasExtraPage ? numFullPages + 1 : numFullPages;
};

function Pagination({ page, setPage, maxPages }) {
  const { colorMode } = useColorMode();

  const incrementPage = () => {
    // pages are 0 indexed
    setPage(Math.min(page + 1, maxPages - 1));
    window.scrollTo(0, 0);
  };

  const decrementPage = () => {
    setPage(Math.max(page - 1, 0));
    window.scrollTo(0, 0);
  };

  return (
    <Stack justify="space-between" direction="row" mt={3} mb={2}>
      <Button
        p={5}
        disabled={page === 0}
        size="sm"
        bg={colorMode === 'light' ? 'primary.300' : 'primary.700'}
        onClick={decrementPage}
      >
        &larr; Previous Page
      </Button>
      <Button
        p={5}
        disabled={page === maxPages - 1 || maxPages === 1}
        size="sm"
        bg={colorMode === 'light' ? 'primary.300' : 'primary.700'}
        onClick={incrementPage}
      >
        Next Page &rarr;
      </Button>
    </Stack>
  );
}

function DownloadTable({ availableDownloads, page, setPage }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [password, setPassword] = useState('');
  const [vcardId, setVcardId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const initialRef = useRef(null);

  const handleDownload = (id) => {
    gusServices
      .getVcard(id, password)
      .then(() => {
        setErrorMessage('');
        onClose();
      })
      .catch((err) => {
        if (err.response?.status === 400) {
          setErrorMessage('Please provide a valid password. If you continue to have issues downloading contact, contact our Support team');
        } else {
          setErrorMessage('Invalid user details. Kindly verify if you are registered');
        }
      });
  };
  const vcards = availableDownloads
    ? availableDownloads.slice(
      PAGE_SIZE * page,
      Math.min(availableDownloads.length, PAGE_SIZE * (page + 1)),
    )
    : [];

  return (
    <>
      <Box m={5}>
        <TableContainer>
          <Table variant="simple">
            <Tbody>
              {vcards.map((card) => (
                <Tr key={card.id}>
                  <Td display="flex">
                    <Button
                      color="teal.500"
                      variant="link"
                      onClick={() => {
                        setVcardId(card.id);
                        onOpen();
                      }}
                    >
                      <Icon as={FaAddressCard} mr="1" />
                      <Text>
                        {`vcard for ${moment(card.date).format('ll')}`}
                      </Text>
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Unlock vcard download</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            { errorMessage && (
            <Alert mb={2} status="error" variant="left-accent">
              <AlertIcon />
              <AlertDescription>
                {errorMessage}
              </AlertDescription>
            </Alert>
            )}
            <FormControl>
              <FormLabel fontWeight="semibold">
                GUS password
              </FormLabel>
              <FormHelperText
                fontStyle="italic"
                fontWeight="hairline"
                fontSize="md"
                mb={2}
              >
                To download the compiled contact for specific
                date, enter your GUS password
              </FormHelperText>
              <Input
                ref={initialRef}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => handleDownload(vcardId)}
            >
              Unlock Download
            </Button>
            <Button onClick={() => {
              setErrorMessage('');
              onClose();
            }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Pagination
        page={page}
        setPage={setPage}
        maxPages={totalPages(availableDownloads)}
      />
    </>
  );
}

export const QuoteIcon = createIcon({
  viewBox: '0 0 50 37',
  d: 'M49.6 4.712C47.2853 5.952 45.4253 7.15067 44.02 8.308C42.6973 9.38267 41.664 10.4573 40.92 11.532C40.176 12.524 39.68 13.4747 39.432 14.384C39.2667 15.2933 39.184 16.1613 39.184 16.988C39.184 18.476 39.8453 19.22 41.168 19.22C46.9547 19.22 49.848 21.948 49.848 27.404C49.848 30.4627 48.98 32.8187 47.244 34.472C45.508 36.1253 43.1107 36.952 40.052 36.952C36.332 36.952 33.48 35.8773 31.496 33.728C29.512 31.496 28.52 28.272 28.52 24.056C28.52 18.4347 30.0907 13.764 33.232 10.044C36.3733 6.24134 40.8787 2.89334 46.748 0L49.6 4.712ZM20.956 4.712C18.6413 5.952 16.7813 7.15067 15.376 8.308C14.0533 9.38267 13.02 10.4573 12.276 11.532C11.532 12.524 11.036 13.4747 10.788 14.384C10.6227 15.2933 10.54 16.1613 10.54 16.988C10.54 18.476 11.2013 19.22 12.524 19.22C18.3107 19.22 21.204 21.948 21.204 27.404C21.204 30.4627 20.336 32.8187 18.6 34.472C16.864 36.1253 14.4667 36.952 11.408 36.952C7.688 36.952 4.836 35.8773 2.852 33.728C0.950667 31.496 0 28.272 0 24.056C0 18.4347 1.52933 13.764 4.588 10.044C7.72933 6.24134 12.2347 2.89334 18.104 0L20.956 4.712Z',
});

export function QuoteView() {
  return (
    <Box as="section" bg={useColorModeValue('gray.50', 'gray.800')}>
      <Box
        maxW="3xl"
        mx="auto"
        px={{
          base: '6',
          md: '8',
        }}
        pt="12"
        pb="16"
      >
        <Flex direction="column" align="center" textAlign="center">
          <QuoteIcon
            color={useColorModeValue('gray.300', 'gray.600')}
            fontSize={{
              base: '2xl',
              md: '4xl',
            }}
          />
          <Text
            fontSize={{
              base: 'xl',
              md: '2xl',
            }}
            fontWeight="medium"
            mt="6"
          >
            The download will be made available at around
            11:55pm&nbsp;
            {moment().format('MMM Do YY')}
            . Kindly exercise
            patience as all the contacts are being compiled for
            you to download
          </Text>
        </Flex>
        <HStack justify="center" spacing="4" mt="8" color={useColorModeValue('gray.300', 'gray.600')}>
          <Circle size="3" bg="blue.500" />
        </HStack>
      </Box>
    </Box>
  );
}

function Downloads() {
  const [availableDownloads, setAvailableDownloads] = useState([]);
  const [page, setPage] = useState(0);
  const toast = useToast();

  useEffect(() => {
    gusServices
      .getVcards()
      .then((response) => {
        setAvailableDownloads(response.data.vcards);
      })
      .catch((err) => {
        toast({
          title: err.message || 'An error occurred. Give it a try later!',
          status: 'error',
          variant: 'subtle',
          duration: 10000,
          isClosable: true,
        });
      });
  }, [toast, setAvailableDownloads]);

  useEffect(() => {
    gusServices.getUser();
  }, []);

  return (
    <Box className="App">
      <QuoteView />
      <Box textAlign="left" m={5} ml={1} p={5}>
        <Heading fontSize="3xl">
          <Icon as={FaListUl} boxSize={5} />
          &nbsp;Download List
        </Heading>
        <Text mt={2} fontSize="lg" color="gray.600">
          Here is a list of previously compiled vCards files for you
          to download if you want.
        </Text>
      </Box>

      {(availableDownloads.length && (
        <DownloadTable
          availableDownloads={availableDownloads}
          page={page}
          setPage={setPage}
        />
      )) || <Text m={3}>No available downloads</Text>}
    </Box>
  );
}

export default Downloads;
