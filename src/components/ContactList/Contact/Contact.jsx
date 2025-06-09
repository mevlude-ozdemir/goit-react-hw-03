import React from 'react';
import { FaUser, FaPhone } from 'react-icons/fa';

const Contact = ({ contact, onDelete }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '10px',
      marginBottom: '10px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div>
        <p><FaUser style={{ marginRight: '6px' }} /> {contact.name}</p>
        <p><FaPhone style={{ marginRight: '6px' }} /> {contact.number}</p>
      </div>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </div>
  );
};

export default Contact;
