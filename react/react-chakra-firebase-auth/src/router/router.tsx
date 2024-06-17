import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Routes } from './routes';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import DashboardOutlet from '../screens/dashboard/DashboardOutlet';
import DashboardHomeScreen from '../screens/dashboard/DashboardHomeScreen';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={Routes.Home} element={<HomeScreen />} />
      <Route path={Routes.Login} element={<LoginScreen />} />
      <Route path={Routes.Dashboard} element={<DashboardOutlet />}>
        <Route path={Routes.DashboardHome} element={<DashboardHomeScreen />} />
      </Route>
    </>
  )
);
