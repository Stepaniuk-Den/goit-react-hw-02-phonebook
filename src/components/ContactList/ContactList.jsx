import React from 'react';
import { StyledContactList } from './ContactList.styled';
import Contact from 'components/Contact/Contact';

const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <StyledContactList>
      {contacts.map(contact => {
        return (
          <Contact
            key={contact.id}
            contact={contact}
            onRemoveContact={onRemoveContact}
          />
        );
      })}
    </StyledContactList>
  );
};

export default ContactList;
