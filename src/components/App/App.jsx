
import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';
import { Toaster } from "react-hot-toast";
import Layout from '../Layout/Layout';
import Loader from "../Loader/Loader";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../../redux/auth/operations';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import RestrictedRoute from "../RestrictedRoute"
import PrivateRoute from "../PrivateRoute"
// асинхронне завантаження компонента відповідної сторінки а Suspense відображається поки завантажується відповідна стр
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));

const RegisterPage = lazy(() => import('../../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'));

export default function App() {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(selectIsRefreshing);
//при монтуванні App() диспатчимо операцію
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  
  //<CssBaseline /> для нормалізації стилів у Material UI
  //Додано Container для обгортки контенту (адаптивна ширина, відступ зверху).

  return (
    <>
      <CssBaseline />
      <Toaster position="top-right" reverseOrder={false} />
      {isRefreshing ? (
        <Loader />
      ) : (
        <Layout>
          <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/register"
                  element={
                    <RestrictedRoute component={<RegisterPage />} redirectTo="/contacts" />
                  }
                />
                <Route
                  path="/login"
                  element={
                    <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
                  }
                />
                <Route
                  path="/contacts"
                  element={
                    <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
                  }
                />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </Container>
        </Layout>
      )}
    </>
  );
}
         