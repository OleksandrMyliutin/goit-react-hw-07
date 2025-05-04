import { useSelector } from 'react-redux';
import Contact from './Contact';
import css from './Contact.module.css';
import {  selectError,  selectFilteredContactsByOptionMemo, selectLoading } from '../../redux/selectors';

export default function ContactList() {
    const contacts = useSelector(selectFilteredContactsByOptionMemo);
    const error = useSelector(selectError);
    const loading = useSelector(selectLoading);



return (
        <ul className={css.wrapper}>   
            {contacts.map(contact => (
            <li key={contact.id} className={css.item}>
                <Contact id={contact.id} name={contact.name} number={contact.number} />
            </li>
            ))}
            {loading && <h2>Loading...</h2>}
            {error && <h2>Server is fall..</h2>}
        </ul>
    );
};