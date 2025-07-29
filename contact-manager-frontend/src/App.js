import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

function App() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const res = await axios.get('http://localhost:5001/api/contacts');
    setContacts(res.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div>
      <h1>Contact Manager</h1>
      <ContactForm onContactAdded={fetchContacts} />
      <ContactList contacts={contacts} onContactChanged={fetchContacts} />
    </div>
  );
}

export default App;