import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ColorModeSwitcher from './ColorModeSwitcher';
import { ColorModeScript, ChakraProvider, theme } from '@chakra-ui/react';

import App from './App';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <App />
    </ChakraProvider>
  </StrictMode>
);
