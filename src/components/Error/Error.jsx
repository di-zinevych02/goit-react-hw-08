import css from "./Error.module.css";
export default function ErrorMessage({ error }) {
  return (
    <div className={css.error}>
      <p className={css.texterror}>
        Whoops there was an error, please reload the page!{" "}
      </p>
    </div>
  );
}