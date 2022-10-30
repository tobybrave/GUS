import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  FormControl,
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
  Select,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import * as yup from 'yup';
import 'yup-phone';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import CountryCodes from '../Parts/CountryCodes';
import * as gusServices from '../../services/gusServices';
import data from '../Parts/data';

function Register() {
  const [showAlert, setShowAlert] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [country, setCountry] = useState('NG');
  const [serverError, setServerError] = useState(false);

  const navigate = useNavigate();
  const toast = useToast();

  const signInFormSchema = yup.object().shape({
    package: yup.mixed().oneOf(['free', 'premium']).default('free').required(),
    name: yup.string().min(3, 'Name must be at least 3 characters').max(50, 'Name cannot be more than 50 characters').required('Name is required'),
    phone: yup.string().phone(country, true, 'Please enter a valid phone number').required('Phone number is required'),
    password: yup.string().required('A password is required'),
  });

  const {
    register, reset, handleSubmit, formState: { errors }, formState,
  } = useForm({
    resolver: yupResolver(signInFormSchema),
    defaultValues: {
      package: 'free',
      name: '',
      phone: '',
      password: '',
    },
  });

  const handleRegister = async (values) => {
    const formatPhoneNumber = Number.parseInt(values.phone, 10);
    const user = {
      name: values.name,
      phone: `${data[country]}${formatPhoneNumber}`,
      password: values.password,
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
        toast({
          title: 'Registration Successful',
          description: 'Your contact is registered!',
          status: 'success',
          variant: 'subtle',
          duration: 7000,
          isClosable: true,
        });
        setShowAlert(true);
        setCountry(country);
        if (values.package === 'premium') {
          navigate('/go-premium');
        } else {
          navigate('/downloads');
        }
      })
      .catch((err) => {
        setServerError(true);
        toast({
          title: err.response?.data?.message || err.message,
          status: 'error',
          variant: 'subtle',
          duration: 7000,
          isClosable: true,
        });
      });
  };

  useEffect(() => {
    if (formState.isSubmitted && formState.isSubmitSuccessful && !serverError) {
      reset();
    }
  }, [formState, reset]);

  return (
    <Box m={5}>
      <Flex
        minH="100vh"
        align="center"
        justify="center"
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
          {showAlert && (
          <Alert
            status="success"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="150px"
            borderRadius="md"
            my={5}
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
          <Stack align="center">
            <Heading id="register" fontSize="2xl" textAlign="center">
              Submit your contact
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
              <FormControl id="package" isInvalid={!!errors.package}>
                <FormLabel>Package</FormLabel>
                <Select
                  bg="gray.100"
                  color="gray.500"
                  _placeholder={{
                    color: 'gray.500',
                  }}
                  {...register('package')}
                >
                  <option value="free">Free</option>
                  <option value="premium">Premium</option>
                </Select>
                {!!errors.package && (
                  <FormErrorMessage>{errors.package.message}</FormErrorMessage>
                )}
              </FormControl>

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
