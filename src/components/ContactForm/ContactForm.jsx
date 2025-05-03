import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css'; // Імпорт стилів


const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is too short!')
    .required('Required'),
  number: Yup.string()
    .matches(/^\+?\d+$/, 'Must be digits or start with +')
    .min(6, 'Too short')
    .required('Required'),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();
  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
  
    console.log('Submitting new contact:', newContact); // 👉 Додаємо лог
  
    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.input}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field className={css.field} type="text" name="name" id={nameFieldId} />
          <ErrorMessage name="name" component="div" className={css.error} />
        </div>

        <div className={css.input}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field className={css.field} type="text" name="number" id={numberFieldId} />
          <ErrorMessage name="number" component="div" className={css.error} />
        </div>

        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
