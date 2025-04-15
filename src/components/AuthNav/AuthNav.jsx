import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";
const getLinkStyles = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function AuthNav() {
  return (
      <div>
          <nav className={css.nav}>
              <ul className={css.list}>
                  <li className={css.item}>
      <NavLink className={getLinkStyles} to="/register">
        Register
                      </NavLink>
                  </li>
                  <li className={css.item}>
      <NavLink className={getLinkStyles}to="/login">
        Log In
                      </NavLink>
                      </li>
              </ul>
</nav>
    </div>
  );
}