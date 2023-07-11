import React from 'react';

const Contact = ({ contact, onRemoveContact }) => {
  return (
    <li>
      <span>
        {contact.name} : {contact.number}
      </span>
      <button type="button" onClick={() => onRemoveContact(contact.id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
