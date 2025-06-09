import React, { useState } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';

function App() {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Rosie Simpson', number: '459-12-56' },
    { id: 2, name: 'Hermione Kline', number: '443-89-12' },
    { id: 3, name: 'Eden Clements', number: '645-17-79' },
    { id: 4, name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const addContact = (newContact) => {
    const contactWithId = { ...newContact, id: Date.now() };
    setContacts([contactWithId, ...contacts]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', padding: 20 }}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <ContactList contacts={contacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
