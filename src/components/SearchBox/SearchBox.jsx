import css from "./SearchBox.module.css";
import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeNameFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const id = useId();
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter);
  const handleInput = (event) => {
    dispatch(changeNameFilter(event.target.value));
  };

  return (
    <div className={css.filter}>
      <span className={css.findcontact}>Find contacts by name</span>
      <input className={css.inputcontact} value={nameFilter} type="text" id={id} onChange={handleInput}/> 
    </div>
  );
};
export default SearchBox;
////Обробник onChange реалізований для оновлення батьківського компоненту новим значенням пошуку.
