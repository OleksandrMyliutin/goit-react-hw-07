import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { deleteContactThunk } from '../../redux/contactsOps.js';
import { selectFilteredContacts } from '../../redux/selectors';

export default function Contact({id, name, number}) {
  const dispatch = useDispatch(selectFilteredContacts);

  const handleDelete = () => {
    dispatch(deleteContactThunk(id));
  };
  
  return (
    <div className={css.wrapperBox}>
      <div className={css.contacts}>
        <ul className={css.contact}>
          <li><IoPerson /></li>
          <li>{name}</li>
        </ul>
        <ul className={css.contact}>
          <li><FaPhoneAlt /></li>
          <li>{number}</li>
        </ul>
      </div>
      <button onClick={handleDelete} className={css.deleteButton}>
        Delete
      </button>
    </div>
  );
}