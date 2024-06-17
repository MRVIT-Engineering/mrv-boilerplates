import React from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { Outlet } from 'react-router';

const DashboardOutlet = () => {
  return (
    <Box w={'100vw'} h={'100vh'}>
      <HStack gap={0}>
        <Box w={264} h={'100vh'}></Box>
        <Box flex={1} h={'100vh'}>
          <Outlet />
        </Box>
      </HStack>
    </Box>
  );
};

export default DashboardOutlet;
