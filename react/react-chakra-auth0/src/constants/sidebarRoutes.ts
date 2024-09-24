import {
  FaBoxOpen,
  FaCog,
  FaHome,
  FaList,
  FaQuestionCircle,
  FaShoppingCart,
  FaUsers,
} from 'react-icons/fa';

import { Routes } from '../router/routes';

import { SidebarItem } from './types';

export const sidebarRoutes: { [key: string]: SidebarItem } = {
  dashboard: {
    path: Routes.DashboardHome,
    label: 'Dashboard',
    icon: FaHome,
  },
  problems: {
    path: Routes.DashboardProblems,
    label: 'Problems',
    icon: FaQuestionCircle,
  },
  // users: {
  //   path: Routes.DashboardUsers,
  //   label: 'Users',
  //   icon: FaUsers,
  // },
  // listings: {
  //   path: Routes.DashboardListings,
  //   label: 'Listings',
  //   icon: FaList,
  //   subRoutes: {
  //     active: {
  //       path: Routes.DashboardListingsActive,
  //       label: 'Active listings',
  //       icon: FaBoxOpen,
  //     },
  //     sold: {
  //       path: Routes.DashboardListingsSold,
  //       label: 'Sold listings',
  //       icon: FaShoppingCart,
  //     },
  //   },
  // },
  // customerSupport: {
  //   path: Routes.DashboardCustomerSupport,
  //   label: 'Customer support',
  //   icon: FaQuestionCircle,
  // },
  // settings: {
  //   path: Routes.DashboardSettings,
  //   label: 'Settings',
  //   icon: FaCog,
  // },
};
