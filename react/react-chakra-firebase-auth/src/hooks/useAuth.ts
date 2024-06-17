import { useState, useEffect } from 'react';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth';

import { auth } from '../services/firebase';
import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { Routes } from '../router/routes';

export const useAuth = () => {
  const toast = useToast();
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const signIn = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      navigate(Routes.DashboardHome);
      return userCredential.user;
    } catch (error) {
      console.error('Error signing in: ', error);
      return toast({
        title: 'Something went wrong, please try again later',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error('Error signing out: ', error);
      throw error;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    signIn,
    logout,
  };
};
