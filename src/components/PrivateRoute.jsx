import { selectIsLoggedIn } from "../redux/auth/selectors";
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";
// приватний маршут,якщо залогінений можеш залишатися на приватному маршуті якщо рологінився то переправляєо на сторінку логіну
export default function PrivateRoute({ component, redirectTo }) {
    
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return isLoggedIn ? component : <Navigate to={redirectTo} />;
}
// головна ідея - дивимось на стан логіну користувача і приймаємо рішення, чи залишаємо на цій стр  даним компонентом чи переправляємо на іншу