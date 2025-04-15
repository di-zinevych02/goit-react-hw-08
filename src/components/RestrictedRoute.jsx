import { selectIsLoggedIn } from "../redux/auth/selectors";
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";
// RestrictedRoute - обмежені маршути
// цей компонент приймає рішення чи рендерити компонент сторінки чи перенаправити користувача
export default function RestrictedRoute({component, redirectTo}) {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    //якщо залогінений користувач то переправляє на сторінку контактів, якщо ні то залишається на сторінці(даному компоненті на якому знаходимось) регістрації
    return isLoggedIn ? <Navigate to={redirectTo} /> : component;
}