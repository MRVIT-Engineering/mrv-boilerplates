import React, { useState } from 'react';
import {
  Box,
  VStack,
  Icon,
  Text,
  Link,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { MdLogout } from 'react-icons/md';
import { observer } from 'mobx-react-lite';

// import EncoreLogo from '../../assets/png/encore-logo.png';
import { useStore } from '../../hooks/useStore';
import { Colors } from '../../theme/colors';
import { CollapsibleLink } from './CollapsibleLink';
import { sidebarRoutes } from '../../constants/sidebarRoutes';
import { SidebarItem } from '../../constants/types';

const SideNavigator = () => {
  const [expandedRoute, setExpandedRoute] = useState<string | null>(null);
  const activeBgColor = useColorModeValue(
    Colors.light.primary,
    Colors.dark.primary
  );
  const inactiveBgColor = useColorModeValue(
    Colors.light.gray,
    Colors.dark.gray
  );
  const hoverBgColor = useColorModeValue(Colors.light.gray3, Colors.dark.gray3);

  const location = useLocation();
  const {} = useStore();

  const currentRoute = Object.values(sidebarRoutes).find((route: any) =>
    location.pathname.includes(route.path)
  );

  const handleMainRouteClick = (path: string) => {
    if (expandedRoute === path) {
      setExpandedRoute(null);
    } else {
      setExpandedRoute(path);
    }
  };

  const isActive = (subPath: any) => location.pathname === subPath;

  const handleLogout = () => {
    // logout();
  };

  return (
    <Box
      position="fixed"
      left={0}
      top={0}
      height="100vh"
      width="250px"
      bg={useColorModeValue(Colors.light.gray, Colors.dark.gray)}
      color={useColorModeValue(Colors.light.text, Colors.dark.text)}
      display={'flex'}
      flexDir={'column'}
      p={4}
      zIndex={1000}
    >
      {/* <Image src={EncoreLogo} alt="encore logo" mb={8} width={150} /> */}
      <Text ml={3} mb={8} fontSize="2xl" fontWeight="bold">
        WeMentor
      </Text>
      <VStack align="start" spacing={4}>
        {Object.values(sidebarRoutes).map((route: SidebarItem) => {
          if (route.subRoutes) {
            return (
              <CollapsibleLink
                key={route.path}
                route={route}
                expanded={
                  expandedRoute === route.path ||
                  currentRoute?.path === route.path
                }
                onRouteClick={handleMainRouteClick}
              />
            );
          }

          return (
            <Link
              key={route.path}
              href={route.path}
              p={2}
              w={'100%'}
              display={'flex'}
              borderRadius={8}
              textDecoration={'none'}
              alignItems={'center'}
              _hover={{
                bg: isActive(route.path) ? activeBgColor : hoverBgColor,
              }}
              bg={isActive(route.path) ? activeBgColor : inactiveBgColor}
            >
              <Icon as={route.icon} />
              <Text
                ml={4}
                alignSelf="center"
                color={isActive(route.path) ? 'white' : '#575A7B'}
              >
                {route.label}
              </Text>
            </Link>
          );
        })}
      </VStack>
      <Box
        display={'flex'}
        justifyContent={'center'}
        mb={8}
        alignItems={'center'}
        gap={4}
        mt={'auto'}
      >
        {/* {colorMode === 'light' ? <MdSunny /> : <MdModeNight />} */}
        {/* <Switch onChange={toggleColorMode} colorScheme={'green'} /> */}
      </Box>
      <Button colorScheme="red" onClick={handleLogout}>
        <MdLogout />
        <Text ml={3}>Logout</Text>
      </Button>
    </Box>
  );
};

export default observer(SideNavigator);
