import { Box, Flex, Link, Spacer } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4} py={2}>
      <Flex align="center">
        <Link as={NavLink} to="/" color="white" fontWeight="bold" mr={4}>
          Home
        </Link>
        <Link as={NavLink} to="/events" color="white" fontWeight="bold">
          Events
        </Link>
        <Spacer />
      </Flex>
    </Box>
  );
};

export default Navbar;