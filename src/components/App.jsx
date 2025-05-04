import { useDispatch } from 'react-redux';
import './App.css'
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import SearchBox from './SearchBox/SearchBox'
import { useEffect } from 'react';
import { fetchDataThunk } from '../redux/contactsOps.js';



function App() {
  const dispatch =  useDispatch();
  useEffect(() => {
    dispatch(fetchDataThunk())
  }, [dispatch]);

  return (
    <>
      <div>
      <h1>PhoneBook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      </div>
    </>
  )
}

export default App
