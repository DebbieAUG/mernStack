import React from 'react';
import axios from 'axios';

function ContactItem({ contact, onContactChanged }) {
  const handleDelete = async () => {
    await axios.delete(`http://localhost:5001/api/contacts/${contact._id}`);
    onContactChanged();
  };

  return (
    <li>
      {contact.name} - {contact.email} - {contact.phone}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default ContactItem;