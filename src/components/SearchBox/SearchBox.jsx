import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterValue } from "../../redux/filters/selectors";
import { changeFilter} from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const valueFilter = useSelector(selectFilterValue);

  const handleInput = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.filter}>
      <span className={css.findcontact}>Find contacts by name</span>
      <input className={css.inputcontact} value={valueFilter} type="text"  onChange={handleInput}/> 
    </div>
  );
};
export default SearchBox;
////Обробник onChange реалізований для оновлення батьківського компоненту новим значенням пошуку.
