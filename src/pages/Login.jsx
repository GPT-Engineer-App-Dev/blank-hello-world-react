import React from 'react';
import { Box, Container, Heading, VStack } from '@chakra-ui/react';
import { SupabaseAuthUI } from '../integrations/supabase/auth.jsx';

const Login = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="xl">Login</Heading>
        <Box width="100%">
          <SupabaseAuthUI />
        </Box>
      </VStack>
    </Container>
  );
};

export default Login;