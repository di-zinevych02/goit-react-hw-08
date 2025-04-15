import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import clsx from "clsx";
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.css';

const getLinkStyles = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
//рендер за умови, сторінка контактів приватна, тому відображається тільки тоді коли користувач залогінений
  return (
      <nav className={css.nav}>
            <ul className={css.list}>
      <li className={css.item}>
      <NavLink className={getLinkStyles} to="/">
        Home
      </NavLink>
      </li>
              {isLoggedIn && (
                   <li className={css.item}>
        <NavLink className={getLinkStyles} to="/contacts">
          Contacts
                  </NavLink>
                  </li>
              )}
          </ul>
    </nav>
  );
}