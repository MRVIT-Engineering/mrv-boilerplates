import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    styles: {
      global: {
        'html, body': {
          boxSizing: 'border-box',
        },
        '*, *::before, *::after': {
          boxSizing: 'inherit',
        },
      },
    },
    primary: {
      50: '#d9d8fa',
      100: '#c6c4f8',
      200: '#7b75ee',
      300: '#6861ec',
      400: '#554ee9',
      500: '#8c52ff',
      600: '#3b34d0',
      700: '#352eb9',
      800: '#2e29a2',
      900: '#28238b',
    },
    gray: {
      200: '#e0e0e0',
      300: '#f6f9fc',
      400: '#e8edf4',
      500: '#bfc3c8',
    },
    textColor: {
      500: '#575A7B',
    },
    success: {
      50: '#eefff2',
      100: '#d7ffe4',
      200: '#b2ffca',
      300: '#76ffa2',
      400: '#33f573',
      500: '#09de50',
      600: '#00b33c',
      700: '#049134',
      800: '#0a712e',
      900: '#0a5d28',
      // 950: '#003413',
    },
    warning: {
      50: '#fff9eb',
      100: '#ffeec6',
      200: '#ffdb88',
      300: '#ffc34d',
      400: '#ffaa20',
      500: '#f98607',
      600: '#dd6002',
      700: '#b74106',
      800: '#94310c',
      900: '#7a2a0d',
      // 950: '#461302',
    },
    danger: {
      50: '#fff0f0',
      100: '#ffdddd',
      200: '#ffc0c0',
      300: '#ff9494',
      400: '#ff5757',
      500: '#ff2323',
      600: '#ff0000',
      700: '#d70000',
      800: '#b10303',
      900: '#920a0a',
      // 950: '#500000',
    },
    nightOwlDark: {
      200: '#063154',
      300: '#052b49',
      400: '#052945',
      500: '#011627',
      700: '#010e1b',
    },
  },
  fonts: {
    body: `'Share Tech Mono', 'Source Code Pro'`,
  },
  shadows: {
    none: 'none',
    light: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
  },
  breakpoints: {
    sm: '34em',
  },
});
