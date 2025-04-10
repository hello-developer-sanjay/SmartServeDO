import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import App from './App';

import { ThemeProvider } from '@/context/ThemeContext'; 

const rootElement = document.getElementById('root');

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
   <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
