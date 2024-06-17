import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Routes } from './routes';
import HomeScreen from '../screens/HomeScreen';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={Routes.Home} element={<HomeScreen />} />
  )
);
