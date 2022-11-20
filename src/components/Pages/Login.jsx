import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
  useMergeRefs,
  useToast,
  FormErrorMessage,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import 'yup-phone';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { HiEye, HiEyeOff } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import * as gusServices from '../../services/gusServices';
import data from '../../constants/data';
import { GusLogo } from '../Icons/icons';
import CountryCodes from '../Parts/CountryCodes';

export const PasswordField = React.forwardRef((props, ref) => {
  const { isOpen, onToggle } = useDisclosure();
  const inputRef = React.useRef(null);
  const mergeRef = useMergeRefs(inputRef, ref);
  const onClickReveal = () => {
    onToggle();
    if (inputRef.current) {
      inputRef.current.focus({
        preventScroll: true,
      });
    }
  };
  return (
    <FormControl isInvalid={!!props.errors.password}>
      <FormLabel htmlFor="password" fontWeight="semibold">Password</FormLabel>
      <InputGroup>
        <InputRightElement>
          <IconButton
            variant="link"
            aria-label={isOpen ? 'Mask password' : 'Reveal password'}
            icon={isOpen ? <HiEyeOff /> : <HiEye />}
            onClick={onClickReveal}
          />
        </InputRightElement>
        <Input
          id="password"
          placeholder="Enter password"
          ref={mergeRef}
          name="password"
          type={isOpen ? 'text' : 'password'}
          autoComplete="current-password"
          required
          bg="gray.100"
          color="gray.500"
          _placeholder={{
            color: 'gray.500',
          }}
          {...props.register('password')}
        />
      </InputGroup>
      {!!props.errors.password && (
      <FormErrorMessage>{props.errors.password.message}</FormErrorMessage>
      )}
    </FormControl>
  );
});
PasswordField.displayName = 'PasswordField';

export default function Login() {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();
  const [country, setCountry] = useState('NG');
  const [serverError, setServerError] = useState(false);

  const signInFormSchema = yup.object().shape({
    phone: yup.string().phone(country, true, 'Please enter a valid phone number').required('Phone number is required'),
    password: yup.string().required('A password is required'),
  });

  const {
    register, reset, handleSubmit, formState: { errors }, formState,
  } = useForm({
    resolver: yupResolver(signInFormSchema),
    defaultValues: {
      phone: user ? user.phone : '',
      password: '',
    },
  });

  const handleLogin = async (values) => {
    const formatPhoneNumber = Number.parseInt(values.phone, 10);
    const userPayload = {
      phone: user ? user.phone : `${data[country]}${formatPhoneNumber}`,
      password: values.password,
    };

    gusServices
      .login(userPayload)
      .then((response) => {
        setCountry(country);
        login(response.data.user);
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
  }, [formState, reset, user]);

  return (
    <Container
      maxW="lg"
      py={{
        base: '12',
        md: '24',
      }}
      px={{
        base: '0',
        sm: '8',
      }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <GusLogo
            color="accent"
            height="12"
            width="auto"
            // viewBox="0 0 89 89"
          />
          <Stack
            spacing={{
              base: '2',
              md: '3',
            }}
            textAlign="center"
          >
            <Heading
              size={useBreakpointValue({
                base: 'xs',
                md: 'sm',
              })}
            >
              Log in to your account
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">Don&apos;t have an account?</Text>
              <Button variant="link" colorScheme="blue" onClick={() => navigate('/register')}>
                Sign up
              </Button>
            </HStack>
          </Stack>
        </Stack>
        <Box
          py={{
            base: '0',
            sm: '8',
          }}
          px={{
            base: '4',
            sm: '10',
          }}
          bg={useBreakpointValue({
            base: 'transparent',
            sm: 'bg-surface',
          })}
          boxShadow={{
            base: 'none',
            sm: useColorModeValue('md', 'md-dark'),
          }}
          borderRadius={{
            base: 'none',
            sm: 'xl',
          }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl id="phone" isInvalid={!!errors.phone}>
                <FormLabel fontWeight="semibold">Phone</FormLabel>
                <Box display="flex">
                  { user
                    ? (
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
                    )
                    : (
                      <>
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
                      </>

                    ) }

                </Box>

                {!!errors.phone && (
                  <FormErrorMessage>{errors.phone.message}</FormErrorMessage>
                )}

              </FormControl>
              <PasswordField register={register} errors={errors} />
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              {/* <Button variant="link" colorScheme="blue" size="sm">
                Forgot password?
              </Button> */}
            </HStack>
            <Stack spacing="6">
              <Button colorScheme="teal" variant="ghost" onClick={handleSubmit(handleLogin)}>Sign in</Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
