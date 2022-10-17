import React, { useEffect, useState, useRef } from 'react';
import { FaAddressCard, FaCloudDownloadAlt, FaListUl } from 'react-icons/fa';
import moment from 'moment';
import {
  Box,
  Container,
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
  const initialRef = useRef(null);
  const toast = useToast();

  const handleDownload = (id) => {
    gusServices
      .getVcard(id, password)
      .then(onClose)
      .catch((err) => {
        if (err.response?.status === 400) {
          if (!toast.isActive(id)) {
            toast({
              id,
              status: 'error',
              title: 'Incorrect password',
              duration: 10000,
              isClosable: true,
              position: 'top',
            });
          }
        } else {
          toast({
            status: 'error',
            title: 'An error occured',
            description:
                            'Invalid user details. Kindly verify if you are registered',
            duration: 10000,
            isClosable: true,
            position: 'top',
          });
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
            <Button onClick={onClose}>Cancel</Button>
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
      <Box textAlign="left" m={3} ml={1} p={3}>
        <Heading as="h2" m={1} size="md" display="flex">
          <FaCloudDownloadAlt fontSize={22} />
            &nbsp;Downloading Compiled Contacts
        </Heading>
        <Container p={2} display="flex">
          <Box bg="teal" p={8} m={2} borderRadius="md">
            <Text fontSize="1.2rem" color="white">
              The download will be made available at around
              11:55pm&nbsp;
              {moment().format('MMM Do YY')}
              . Kindly exercise
              patience as all the contacts are being compiled for
              you to download
            </Text>
          </Box>
        </Container>
      </Box>
      <Box textAlign="left" m={5} ml={1} p={5}>
        <Heading as="h3" m={1} size="md" display="flex">
          <FaListUl fontSize={19.5} />
            &nbsp;Download List
        </Heading>
        <Text fontWeight="hairline" fontSize="1rem">
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
      )) || <Text>No available downloads</Text>}
    </Box>
  );
}

export default Downloads;
