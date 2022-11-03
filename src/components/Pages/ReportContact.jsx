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
  Textarea,
} from '@chakra-ui/react';
import React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import qs from 'qs';
import axios from 'axios';

export default function Report() {
  // const toast = useToast();

  const phoneRegExp = /^\+(?:[0-9] ?){6,14}[0-9]$/;
  const signInFormSchema = yup.object().shape({
    name: yup.string().min(3, 'Name must be at least 3 characters').max(50, 'Name cannot be more than 50 characters').required('Name is required'),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone number is required'),
    reason: yup.string().required('A reason is required'),
  });

  const {
    register, handleSubmit, formState: { errors }, formState,
  } = useForm({
    resolver: yupResolver(signInFormSchema),
    defaultValues: {
      name: '',
      phone: '',
      reason: '',
    },
  });

  const handleReport = async (values) => {
    const reportDetails = qs.stringify({
      'entry.2005620554': values.name,
      'entry.1045781291': values.phone,
      'entry.1603243538': values.reason,
    });

    axios
      .post(
        'https://docs.google.com/forms/d/e/1FAIpQLSeEYlddVHJnDLJ3SxLpUVfqyWiA-8EqN5pln_L03kOfnsl_rg/formResponse',
        reportDetails,
      ).then((res) => console.log(res)).catch((err) => console.error(err));
    // toast({
    //   title: 'Thanks for reporting the contact. Our team will look into the report.',
    //   status: 'info',
    //   duration: 7000,
    //   isClosable: true,
    // });
  };

  // useEffect(() => {
  //   if (formState.isSubmitted && formState.isSubmitSuccessful) {
  //     reset();
  //   }
  // }, [formState, reset]);

  return (
    <Box m={5} className="App">
      <Flex
        minH="100vh"
        align="center"
        justify="center"
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
          <Stack align="center">
            <Heading id="register" fontSize="2xl" textAlign="center">
              Report Contact
            </Heading>
            <Text fontSize="lg" color="gray.600" textAlign="center">
              If you think any GUS contact has acted badly and you want us to look into it,
              kindly submit their phone number here
            </Text>
          </Stack>
          <Box
            as="form"
            rounded="lg"
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow="lg"
            p={8}
            onSubmit={handleSubmit(handleReport)}
          >
            <Stack spacing={4}>

              <FormControl id="name" isInvalid={!!errors.name}>
                <FormLabel fontWeight="semibold">Contact Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter name of contact"
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
                <FormLabel>Contact Phone</FormLabel>
                <Box display="flex">
                  <Input
                    type="tel"
                    placeholder="Enter contact phone number with zip code"
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
              <FormControl id="reason" isInvalid={!!errors.reason}>
                <FormLabel>Reason</FormLabel>
                <Textarea
                  placeholder="Tell us why you are reporting this contact"
                  bg="gray.100"
                  color="gray.500"
                  _placeholder={{
                    color: 'gray.500',
                  }}
                  {...register('reason')}
                />
                {!!errors.reason && (
                  <FormErrorMessage>{errors.reason.message}</FormErrorMessage>)}
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
                  Report
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}
