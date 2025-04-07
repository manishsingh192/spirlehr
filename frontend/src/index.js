import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {store} from './Store/Store'
import { Provider } from 'react-redux';


// Create a Material-UI theme
const theme = createTheme();

const root = ReactDOM.createRoot(document.getElementById('root'));
if (document.getElementById('root')) {
  root.render(
    <React.StrictMode>
      <Provider store={store}> 
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
      </Provider>
    </React.StrictMode>
  );
} else {
  console.error('Root element not found.');
}


// For measuring app performance
reportWebVitals();
