import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./LoginPage.module.css"

export default function LoginPage() {
  return (
    <div>
      <h2 className={css}>Please log in</h2>
      <LoginForm />
    </div>
  );
}