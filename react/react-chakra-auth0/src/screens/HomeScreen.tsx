import { Box, Button, VStack, Text, Heading } from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Routes } from '../router/routes';
// import { Logo } from '../../components/common/Logo';

const HomeScreen = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const handleLogin = () => {
    loginWithRedirect();
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate(Routes.DashboardHome);
    }
  }, [isAuthenticated, navigate]);

  return (
    <Box
      w="100vw"
      h="100vh"
      bg="primary.50"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack
        spacing={8}
        bg="white"
        p={12}
        borderRadius="xl"
        shadow="md"
        align="center"
      >
        {/* <Logo width="120px" height="120px" /> */}
        <Heading color="primary.500" size="xl">
          Welcome to Dashboard
        </Heading>
        <Text fontSize="lg" textAlign="center" color="gray.600">
          Get started by logging in to your account.
        </Text>
        <Button
          colorScheme="primary"
          size="lg"
          onClick={handleLogin}
          width="100%"
        >
          Log In
        </Button>
        <Text fontSize="sm" color="gray.500">
          &copy; {new Date().getFullYear()} All rights reserved.
        </Text>
      </VStack>
    </Box>
  );
};

export default HomeScreen;
