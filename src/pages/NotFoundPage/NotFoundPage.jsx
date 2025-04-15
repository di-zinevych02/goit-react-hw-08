import { Link } from "react-router";
import css from "./NotFoundPage.module.css";
export default function NotFoundPage() {
  return (
    <div className={css.container}>
      <p className={css.notfoundpage}>The page not found(</p>
      <Link to="/" className={css.notfoundpagebtn}>Home</Link>
    </div>
  );
}