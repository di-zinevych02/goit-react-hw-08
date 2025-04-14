import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './components/App/App.jsx'
import { Provider } from 'react-redux'
import { store } from "./redux/store.js";


//<StrictMode> — інструмент React для перевірки потенційних проблем.
//<Provider> — робить Redux store доступним для всіх компонентів.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
              <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
