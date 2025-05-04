import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';
import { selectFilteredContacts } from '../../redux/selectors';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilteredContacts);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.wrapper}>
      <label>Find contacts by name:</label>
      <input
        className={css.field}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}