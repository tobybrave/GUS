import {
  Box, Flex, Link, Stack, Text,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import React, { useState } from 'react';
import { CgMenu, CgClose } from 'react-icons/cg';
import Logo from '../Parts/Logo';

// export function Logo(props) {
//   return (
//     <Box {...props}>
//       <Text fontSize="lg" fontWeight="bold">GUS🍧</Text>
//     </Box>
//   );
// }

export function MenuToggle({ toggle, isOpen }) {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <CgClose size={30} /> : <CgMenu size={30} />}
    </Box>
  );
}

export function MenuItem({
  children, isLast, to = '/', toggle, ...rest
}) {
  return (
    <Link as={RouterLink} to={to} onClick={toggle}>
      <Text display="block" {...rest}>{children}</Text>
    </Link>
  );
}

export function MenuLinks({ isOpen, toggle }) {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem toggle={toggle} to="/">Home</MenuItem>
        <MenuItem toggle={toggle} to="/register">Register</MenuItem>
        <MenuItem toggle={toggle} to="/go-premium">Go Premium</MenuItem>
        <MenuItem toggle={toggle} to="/downloads">Downloads</MenuItem>
        <MenuItem toggle={toggle} to="/how-to-install">How to Install</MenuItem>
        <MenuItem toggle={toggle} to="/terms-of-service">Terms of service</MenuItem>
        <MenuItem toggle={toggle} to="/report">Report Contact</MenuItem>
      </Stack>
    </Box>

  );
}

export function NavBarContainer({ children, ...props }) {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      // mb={8}
      p={2}
      // bg={['primary.500', 'primary.500', 'transparent', 'transparent']} initial bg and color
      // color={['white', 'white', 'primary.700', 'primary.700']} #1b2d38
      bg={['white', 'white', 'transparent', 'transparent']}
      color="#1b2d38"
      {...props}
    >
      {children}
    </Flex>
  );
}

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer>
      <Logo />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks toggle={toggle} isOpen={isOpen} />
    </NavBarContainer>
  );
}

export default NavBar;
