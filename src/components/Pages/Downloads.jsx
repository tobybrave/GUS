import React, { useEffect, useState, useRef } from 'react';
import { FaAddressCard, FaListUl, FaWhatsapp } from 'react-icons/fa';
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
  HStack,
  useColorModeValue,
  Flex,
  Alert,
  AlertIcon,
  AlertDescription,
  Link,
  Tooltip,
} from '@chakra-ui/react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Timer from '../Parts/Timer';
import * as gusServices from '../../services/gusServices';
import { QuoteIcon } from '../Icons/icons';
import { useAuth } from '../../hooks/useAuth';

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
  const { user } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [password, setPassword] = useState('');
  const [vcardId, setVcardId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const initialRef = useRef(null);
  const navigate = useNavigate();

  const handleDownload = (id) => {
    gusServices
      .getVcard(id, password, user?.token)
      .then(() => {
        setErrorMessage('');
        onClose();
      })
      .catch((err) => {
        if (err.response?.status === 400) {
          setErrorMessage('Please provide a valid password. If you continue to have issues downloading contact, contact our Support team');
        } else {
          navigate('/login', { replace: true });
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
                        {`vcard for ${moment(card.createdAt).utc().format('ll')}`}
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
            color={useColorModeValue('gray.500', 'gray.600')}
          >
            Can&apos;t wait for that long?
            <br />
            Click the Whatsapp icon to share on Whatsapp and download quicker
          </Text>
        </Flex>
        <HStack justify="center" spacing="4" mt="8" color={useColorModeValue('gray.300', 'gray.600')}>
          <Tooltip label="Not implemented yet">
            <Button colorScheme="whatsapp" variant="link">
              <Link
                href="https://wa.me/?text=*Are%20You%20Tired%20of%20Getting%20Embarrassing%20WhatsApp%20Status%20Views?%20😢%20*%20%0A*DO%20YOU%20WANNA%20INCREASE%20YOUR%20WHATSAPP%20AUDIENCE%20FOR%20FREE???%20*%0AVISIT:%20www.growursocials.com"
              >
                <FaWhatsapp size={40} />
              </Link>
            </Button>
          </Tooltip>
        </HStack>
      </Box>
    </Box>
  );
}

export function ShareCardCTA({ handleShare }) {
  return (
    <Box height="100vh">
      <Modal
        isOpen
        /* eslint-disable no-void */
        onClose={() => void 0}
        size="lg"
        blockScrollOnMount={false}
        trapFocus={false}
      >
        <ModalOverlay />
        <ModalContent borderRadius="2xl" mx="4">
          <ModalBody>
            <Stack
              maxW="xs"
              mx="auto"
              py={{
                base: '12',
                md: '16',
              }}
              spacing={{
                base: '6',
                md: '5',
              }}
            >
              <Stack spacing="3" textAlign="center">
                <Stack align="center" spacing={2}>
                  <Icon as={FaWhatsapp} w={20} h={20} />
                  <Heading
                    textTransform="uppercase"
                    fontSize="3xl"
                    color={useColorModeValue('gray.800', 'gray.200')}
                  >
                    send invite
                  </Heading>
                  <Text fontSize="lg" color="gray.500">
                    Want to invite your friends?
                  </Text>
                </Stack>
              </Stack>
              <Link
                href="https://wa.me/?text=*Are%20You%20Tired%20of%20Getting%20Embarrassing%20WhatsApp%20Status%20Views?%20😢%20*%20%0A*DO%20YOU%20WANNA%20INCREASE%20YOUR%20WHATSAPP%20AUDIENCE%20FOR%20FREE???%20*%0AVISIT:%20www.growursocials.com"
                isExternal
                textAlign="center"
                _hover={{ textDecoration: 'none' }}
              >
                <Button
                  onClick={handleShare}
                  p={4}
                  variant="link"
                  bg="whatsapp.400"
                  color="white"
                  _hover={{
                    textDecoration: 'none',
                  }}
                >
                  Share on whatsapp
                </Button>
              </Link>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

function Downloads() {
  const { user } = useAuth();
  const [availableDownloads, setAvailableDownloads] = useState([]);
  const [page, setPage] = useState(0);
  const [showShare, setShowShare] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.prevPath === '/register') {
      setShowShare(true);
    }
    gusServices
      .getVcards(user?.token)
      .then((response) => {
        setAvailableDownloads(response.data.vcards);
      })
      .catch((err) => {
        if (err.response?.status === 401) {
          navigate('/login', { replace: true });
        }
        toast({
          title: 'An error occurred. Give it a try later!',
          status: 'error',
          variant: 'subtle',
          duration: 7000,
          isClosable: true,
        });
      });
  }, [toast, setAvailableDownloads]);

  const toDisplay = user
    ? (
      <Box className="App">
        <Timer />
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
    )
    : <Navigate to="/login" replace />;
    // : (
    //   <Box objectFit="contain">
    //     <Image src="/images/401.jpg" alt="401 error" />
    //   </Box>

  return (
    showShare
      ? (
        <ShareCardCTA handleShare={() => {
          setShowShare(false);
        }}
        />
      )
      : toDisplay
  );
}

export default Downloads;
