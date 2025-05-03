// import './App.css'

import { useEffect, useState } from 'react';
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'
import data from './assets/data.json'
import { nanoid } from 'nanoid';

function App() {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("saved-contact");
    return saved ? JSON.parse(saved) : data;
  });
  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const filteredTodos = todos.filter((contact) => 
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  const handleSubmit = (values, action) => {
    const newContact = {
      id: nanoid(),
      name: values.username,
      number: values.phone.toString(),
    };
    setTodos(prev => [...prev, newContact]);
    action.resetForm();
  };
  
  useEffect(() => {
    localStorage.setItem("saved-contact", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit}/>
      <SearchBox inputValue={inputValue} handleChange={handleChange}/>
      <ContactList contacts = {filteredTodos} filtered = {filteredTodos}  handleDelete={handleDelete} />
      </div>
    </>
  )
}

export default App
