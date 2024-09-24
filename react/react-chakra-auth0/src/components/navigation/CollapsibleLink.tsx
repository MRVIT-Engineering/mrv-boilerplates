import {
  Box,
  Collapse,
  HStack,
  Icon,
  Text,
  VStack,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

import { SidebarItem } from '../../constants/types';
import { Colors } from '../../theme/colors';

type Props = {
  route: SidebarItem;
  onRouteClick: (r: string) => void;
  expanded: boolean;
};

export const CollapsibleLink = ({ route, expanded, onRouteClick }: Props) => {
  const location = useLocation();
  const activeBgColor = useColorModeValue(
    Colors.light.primary,
    Colors.dark.primary
  );
  const inactiveBgColor = useColorModeValue(
    Colors.light.gray,
    Colors.dark.gray
  );
  const hoverBgColor = useColorModeValue(Colors.light.gray3, Colors.dark.gray3);
  const activeTextColor = 'white';
  const inactiveTextColor = useColorModeValue('black', 'white');

  const isActive = (subPath: any) => location.pathname === subPath;

  return (
    <Box key={route.path} w="100%">
      <HStack
        onClick={() => onRouteClick(route.path)}
        bg={isActive(route.path) ? activeBgColor : inactiveBgColor}
        color={isActive(route.path) ? activeTextColor : inactiveTextColor}
        borderRadius={8}
        w="100%"
        justifyContent="flex-start"
        _hover={{
          bg: isActive(route.path) ? activeBgColor : hoverBgColor,
          color: isActive(route.path) ? activeTextColor : inactiveTextColor,
        }}
        _focus={{ boxShadow: 'none' }}
        p={2}
        mb={expanded ? 4 : 0}
        cursor="pointer"
      >
        <Icon as={route.icon} />
        <Text ml={4} color={isActive(route.path) ? 'white' : inactiveTextColor}>
          {route.label}
        </Text>
      </HStack>
      <Collapse in={expanded} animateOpacity>
        <VStack pl={8} align="start" w="100%">
          {route.subRoutes &&
            Object.values(route.subRoutes).map((subRoute: SidebarItem) => (
              <Link
                key={subRoute.path}
                href={subRoute.path}
                style={{
                  textDecoration: 'none',
                  display: 'flex',
                  width: '100%',
                  alignItems: 'center',
                }}
                _hover={{
                  bg: isActive(subRoute.path) ? activeBgColor : hoverBgColor,
                  color: isActive(subRoute.path)
                    ? activeTextColor
                    : inactiveTextColor,
                }}
                bg={isActive(subRoute.path) ? activeBgColor : inactiveBgColor}
                color={
                  isActive(subRoute.path) ? activeTextColor : inactiveTextColor
                }
                p={2}
                borderRadius={8}
              >
                <Icon as={subRoute.icon} />
                <Text
                  w="100%"
                  ml={4}
                  color={isActive(subRoute.path) ? 'white' : inactiveTextColor}
                >
                  {subRoute.label}
                </Text>
              </Link>
            ))}
        </VStack>
      </Collapse>
    </Box>
  );
};
