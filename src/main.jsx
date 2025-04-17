import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "./redux/store.js";
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
//<StrictMode> — інструмент React для перевірки потенційних проблем.
//<Provider> — робить Redux store доступним для всіх компонентів.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
              <BrowserRouter>
        <App />
        </BrowserRouter>
      </PersistGate>
      </Provider>
      </ThemeProvider>
  </StrictMode>
);
