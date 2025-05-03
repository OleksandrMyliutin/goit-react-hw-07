import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './Contact.module.css';
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact({id, name, number}) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
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