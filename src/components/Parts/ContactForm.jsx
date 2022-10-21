import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  Text,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import CountryCode from './CountryCodes';
import * as gusServices from '../../services/gusServices';

function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+234');
  const [showAlert, setShowAlert] = useState(false);
  const [password, setPassword] = useState('');
  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name,
      password,
      phone: `${countryCode}${phone}`,
    };

    gusServices
      .register(user)
      .then((response) => {
        if (response.status === 200) {
          toast({
            title: 'Contact already exist',
            status: 'info',
            variant: 'subtle',
            duration: 7000,
            isClosable: true,
          });
          return;
        }
        setShowAlert(true);
        setCountryCode(countryCode);
        setName('');
        setPhone('');
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: err.response.data?.message || err.message,
          status: 'error',
          variant: 'subtle',
          duration: 7000,
          isClosable: true,
        });
      });
  };

  return (
    <Box m={5}>
      {showAlert && (
        <Alert
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px"
          borderRadius="md"
          my={10}
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Registration successful!
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            Account successfully created. Your password to unlock
            every vcard is &nbsp;
            <Text as="span" fontWeight="semibold">
              {password}
            </Text>
            . Endeavour to store and keep your password safe.
          </AlertDescription>
        </Alert>
      )}
      <Heading textAlign="left" as="h3" size="md">
        Submit your name and number
      </Heading>
      <Text fontSize="md" textAlign="left">
        Submit your name and number to be compiled for download by
        yourself and others
      </Text>
      <Box id="register" maxWidth="80%" borderRadius="md" m={5}>
        <FormControl m={2}>
          <FormLabel htmlFor="name">
            <Text fontWeight="semibold">Name</Text>
          </FormLabel>
          <Input
            variant="filled"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl m={2}>
          <FormLabel htmlFor="phone">
            <Text fontWeight="semibold">Phone</Text>
          </FormLabel>
          <InputGroup>
            <CountryCode
              countryCode={countryCode}
              handleCountryCodeChange={(e) => setCountryCode(e.target.value)}
            />
            <Input
              variant="filled"
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </InputGroup>
        </FormControl>
        <FormControl m={2}>
          <FormLabel htmlFor="name">
            <Text fontWeight="semibold">Password</Text>
          </FormLabel>
          <FormHelperText textAlign="left" pb={2}>To download vcards you&quot;ll need a password</FormHelperText>
          <Input
            variant="filled"
            type="password"
            placeholder="Enter a password "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button
          mt={4}
          colorScheme="teal"
          borderRadius="md"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default ContactForm;
