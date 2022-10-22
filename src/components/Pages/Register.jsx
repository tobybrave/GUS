import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  FormControl,
  // FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  Text,
  useToast,
  Flex,
  FormErrorMessage,
  InputRightElement,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import * as yup from 'yup';
import 'yup-phone';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import CountryCodes from '../Parts/CountryCodes';
import * as gusServices from '../../services/gusServices';
import data from '../Parts/data';

function Register() {
  // const [name, setName] = useState('');
  // const [phone, setPhone] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  // const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [country, setCountry] = useState('NG');
  const toast = useToast();

  const signInFormSchema = yup.object().shape({
    name: yup.string().min(3, 'Name must be at least 3 characters').max(50, 'Name cannot be more than 50 characters').required('Name is required'),
    phone: yup.string().phone(country, true, 'Please enter a valid phone number').required('Phone number is required'),
    password: yup.string().required('A password is required'),
  });

  const {
    register, handleSubmit, formState: { errors }, formState,
  } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const handleRegister = async (values) => {
    const user = {
      name: values.name,
      password: values.password,
      phone: `${data[country]}${values.phone}`,
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
        setCountry(country);
        useForm();
        // setName('');
        // setPhone('');
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
            Account successfully created.
          </AlertDescription>
        </Alert>
      )}
      <Flex
        minH="100vh"
        align="center"
        justify="center"
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
          <Stack align="center">
            <Heading id="register" fontSize="2xl" textAlign="center">
              Submit your name and number
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Submit your name and number to be compiled for download by
              yourself and others
            </Text>
          </Stack>
          <Box
            as="form"
            rounded="lg"
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow="lg"
            p={8}
            onSubmit={handleSubmit(handleRegister)}
          >
            <Stack spacing={4}>

              <FormControl id="name" isInvalid={!!errors.name}>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter name"
                  bg="gray.100"
                  color="gray.500"
                  _placeholder={{
                    color: 'gray.500',
                  }}
                  {...register('name')}
                />
                {!!errors.name && (
                  <FormErrorMessage>{errors.name.message}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl id="phone" isInvalid={!!errors.phone}>
                <FormLabel>Phone</FormLabel>
                <Box display="flex">
                  <CountryCodes
                    country={country}
                    handleCountryChange={(e) => setCountry(e.target.value)}
                  />
                  <Input
                    type="tel"
                    placeholder="Enter phone number"
                    bg="gray.100"
                    color="gray.500"
                    _placeholder={{
                      color: 'gray.500',
                    }}
                    {...register('phone')}
                  />
                </Box>

                {!!errors.phone && (
                  <FormErrorMessage>{errors.phone.message}</FormErrorMessage>
                )}

              </FormControl>

              <FormControl id="password" isInvalid={!!errors.password}>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter password"
                    bg="gray.100"
                    color="gray.500"
                    _placeholder={{
                      color: 'gray.500',
                    }}
                    {...register('password')}
                  />
                  <InputRightElement h="full">
                    <Button
                      variant="ghost"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {!!errors.password && (
                  <FormErrorMessage>{errors.password.message}</FormErrorMessage>)}
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  type="submit"
                  loadingText="Submitting"
                  size="lg"
                  bg="blue.400"
                  color="white"
                  _hover={{
                    bg: 'blue.500',
                  }}
                  isLoading={formState.isSubmitting}
                >
                  Register
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}

export default Register;
