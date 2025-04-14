import ClipLoader from "react-spinners/ClipLoader";
//npm i react-spinners
import css from "./Loader.module.css";
export default function Loader({ loading, color = " #6fbf7a", size = 80 }) {
  return (
    <div className={css.loader}>
      <ClipLoader
        className={css.loading}
        color={color}
        loading={loading}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}