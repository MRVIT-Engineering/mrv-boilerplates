import React from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { Outlet } from 'react-router';
import SideNavbar from '../../components/navigation/SideNavbar';

const DashboardOutlet = () => {
  return (
    <Box w={'100vw'} h={'100vh'}>
      <HStack gap={0}>
        <Box w={264} h={'100vh'}>
          <SideNavbar />
        </Box>
        <Box flex={1} h={'100vh'}>
          <Outlet />
        </Box>
      </HStack>
    </Box>
  );
};

export default DashboardOutlet;
