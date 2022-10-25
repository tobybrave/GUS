import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Flex,
  FormErrorMessage,
  Stack,
  useColorModeValue,
  useToast,
  Alert,
  AlertIcon,
  AlertTitle,

} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import 'yup-phone';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import PaystackPop from '@paystack/inline-js';
import * as gusServices from '../../services/gusServices';

function PremiumPlan() {
  const [showAlert, setShowAlert] = useState(false);
  const toast = useToast();
  const signInFormSchema = yup.object().shape({
    name: yup.string().min(3, 'Name must be at least 3 characters').max(50, 'Name cannot be more than 50 characters').required('Name is required'),
    phone: yup.string().phone(undefined, undefined, 'Please enter a valid phone number').required('Phone number is required'),
    email: yup.string().email('Please enter a valid email addrress').required('Email is required to receive payment receipt'),
  });

  const {
    register, setValue, handleSubmit, formState: { errors }, formState,
  } = useForm({
    resolver: yupResolver(signInFormSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
    },
  });

  const handlePayment = async (values) => {
    const paystack = new PaystackPop();

    paystack.newTransaction({
      ...values,
      metadata: {
        ...values,
        custom_fields: [
          {
            display_name: values.name,
            variable_name: values.name,
            value: values.phone,
          },
        ],
      },
      key: 'pk_test_3baa29676132d0f704cc5a21a3a764d9697fc606',
      amount: 2000 * 100,
      onCancel: () => {
        toast({
          title: 'Transaction cancelled',
          position: 'top',
          status: 'info',
          variant: 'subtle',
          duration: 7000,
          isClosable: true,
        });
      },
      onSuccess: (transaction) => {
        const message = `Payment complete! Reference: ${transaction.reference}`;

        fetch(`http://localhost:5000/api/payment/verify/${transaction.reference}`).then((res) => res.json()).then(console.log).catch(console.error);
        alert(message);
        toast({
          title: 'message',
          position: 'top',
          status: 'success',
          variant: 'subtle',
          duration: 7000,
          isClosable: true,
        });
      },
    });
  };

  useEffect(() => {
    const isUser = gusServices.getUser();
    if (isUser) {
      setValue('name', isUser.name);
      setValue('phone', isUser.phone);
    } else {
      setShowAlert(true);
    }
  }, [setValue]);

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
              status="info"
              variant="subtle"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              height="100px"
              borderRadius="md"
              my={3}
            >
              <AlertIcon boxSize="40px" mr={0} />
              <AlertTitle mt={4} mb={1} fontSize="lg">
                You&apos;re not a registered contact!!
              </AlertTitle>
            </Alert>
          )}
          <Stack align="center">
            <Heading id="register" fontSize="2xl" textAlign="center">
              Go Premium
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Kindly enter your email address below to make your payment to complete the process
            </Text>
          </Stack>
          <Box
            as="form"
            rounded="lg"
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow="lg"
            p={8}
            onSubmit={handleSubmit(handlePayment)}
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
                {!!errors.phone && (
                <FormErrorMessage>{errors.phone.message}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl id="email" isInvalid={!!errors.email}>
                <FormLabel>Email</FormLabel>

                <Input
                  type="email"
                  placeholder="Enter email address"
                  bg="gray.100"
                  color="gray.500"
                  _placeholder={{
                    color: 'gray.500',
                  }}
                  {...register('email')}
                />

                {!!errors.email && (
                <FormErrorMessage>{errors.email.message}</FormErrorMessage>)}
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  disabled={showAlert}
                  type="submit"
                  loadingText="Submitting"
                  size="lg"
                  bg="green.400"
                  color="white"
                  _hover={{
                    bg: 'green.500',
                  }}
                  isLoading={formState.isSubmitting}
                >
                  Pay ₦2000
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>

  );
}

export default PremiumPlan;
