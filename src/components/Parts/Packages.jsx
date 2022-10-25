import {
  Box, Button, Flex, Heading,
  Icon, Link, List, ListIcon, ListItem, SimpleGrid, Text, VStack, useColorModeValue,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { SiHive, SiMarketo } from 'react-icons/si';
import { HiCheckCircle } from 'react-icons/hi';
import { Link as ReactLink } from 'react-router-dom';
import * as gusServices from '../../services/gusServices';

export function CardBadge(props) {
  const { children, ...flexProps } = props;
  return (
    <Flex
      bg={useColorModeValue('blue.500', 'blue.200')}
      position="absolute"
      right={-20}
      top={6}
      width="240px"
      transform="rotate(45deg)"
      py={2}
      justifyContent="center"
      alignItems="center"
      {...flexProps}
    >
      <Text
        fontSize="xs"
        textTransform="uppercase"
        fontWeight="bold"
        letterSpacing="wider"
        color={useColorModeValue('white', 'gray.800')}
      >
        {children}
      </Text>
    </Flex>
  );
}

export function Card(props) {
  const { children, isPopular, ...rest } = props;
  return (
    <Box
      bg={useColorModeValue('white', 'gray.700')}
      position="relative"
      px="6"
      pb="6"
      pt="16"
      overflow="hidden"
      shadow="lg"
      maxW="md"
      width="100%"
      {...rest}
    >
      {isPopular && <CardBadge>Popular</CardBadge>}
      {children}
    </Box>
  );
}

export function PricingCard(props) {
  const {
    data, icon, button, ...rest
  } = props;
  const { features, price, name } = data;
  const accentColor = useColorModeValue('blue.600', 'blue.200');
  return (
    <Card
      rounded={{
        sm: 'xl',
      }}
      {...rest}
    >
      <VStack spacing={6}>
        <Icon aria-hidden as={icon} fontSize="4xl" color={accentColor} />
        <Heading size="md" fontWeight="extrabold">
          {name}
        </Heading>
      </VStack>
      <Flex align="flex-end" justify="center" fontWeight="extrabold" color={accentColor} my="8">
        <Heading size="3xl" fontWeight="inherit" lineHeight="0.9em">
          {price}
        </Heading>
        <Text fontWeight="inherit" fontSize="2xl">
          / month
        </Text>
      </Flex>
      <List spacing="4" mb="8" maxW="28ch" mx="auto">
        {features.map((feature, index) => (
          /* eslint-disable react/no-array-index-key */
          <ListItem fontWeight="medium" key={index}>
            <ListIcon fontSize="xl" as={HiCheckCircle} marginEnd={2} color={accentColor} />
            {feature}
          </ListItem>
        ))}
      </List>
      {button}
    </Card>
  );
}

export function ActionButton(props) {
  const { path } = props;
  return (
    <Link as={ReactLink} to={path || '/register'}>
      <Button
        colorScheme="blue"
        size="lg"
        w="full"
        fontWeight="extrabold"
        py={{
          md: '8',
        }}
        {...props}
      />
    </Link>
  );
}

export default function PackagesDiff() {
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    const user = gusServices.getUser();
    if (user) {
      setIsUser(true);
    } else {
      setIsUser(false);
    }
  });
  return (
    <Box
      as="section"
      bg={useColorModeValue('gray.50', 'gray.800')}
      py="14"
      px={{
        base: '4',
        md: '8',
      }}
      display="flex"
      alignItems="center"
    >
      <SimpleGrid
        columns={{
          base: 1,
          lg: 2,
        }}
        spacing={8}
        // {{
        //   base: '8',
        //   lg: '0',
        // }}
        maxW="7xl"
        mx="auto"
        justifyItems="center"
        alignItems="center"
      >
        <PricingCard
          data={{
            price: '₦0',
            name: 'Free',
            features: [
              'Limited downloads',
              'For personal use',
              'Totally free',
            ],
          }}
          icon={SiHive}
          button={(
            <ActionButton variant="outline" borderWidth="2px">
              Get started
            </ActionButton>
        )}
        />
        <PricingCard
          data={{
            price: '₦2000',
            name: 'Premium',
            features: [
              'Unlimited downloads',
              'For Businesses',
              'All features',
            ],
          }}
          icon={SiMarketo}
          button={(
            <ActionButton borderWidth="2px" path={isUser ? '/go-premium' : undefined}>
              Buy now
            </ActionButton>
        )}
        />
      </SimpleGrid>
    </Box>
  );
}
