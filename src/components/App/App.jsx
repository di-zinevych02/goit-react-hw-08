
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Loader from "../Loader/Loader";

// асинхронне завантаження компонента відповідної сторінки а Suspense відображається поки завантажується відповідна стр
// const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
// const RegisterPage = lazy(() => import('../../pages/RegisterPage/RegisterPage'));
// const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
// const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'));

export default function App() {
  return (
    <Layout>
      {/* <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense> */}
    </Layout>
  );
}
