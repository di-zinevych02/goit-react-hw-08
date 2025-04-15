
import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Loader from "../Loader/Loader";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../../redux/auth/operations';
import { selectIsRefreshing } from '../../redux/auth/selectors';
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
  return isRefreshing ? (
    <Loader />
  ) : (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
         