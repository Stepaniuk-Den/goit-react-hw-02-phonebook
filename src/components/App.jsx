import React, { Component } from 'react';
import Form from './Form/Form';
import Section from './Section/Section';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import FilterBar from './FilterContact/FilterBar';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  onAddContact = contactData => {
    const contact = {
      id: nanoid(),
      ...contactData,
    };
    this.setState({ contacts: [contact, ...this.state.contacts] });
  };
  onFilter = filtered => {
    this.setState({ filter: filtered });
  };

  onRemoveContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };
  render() {
    const filteredContact = this.state.contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase().trim())
    );
    return (
      <div className="container">
        <Section title="Phonebook">
          <Form onAddContact={this.onAddContact} />
        </Section>
        <Section title="Contacts">
          <FilterBar filter={this.state.filter} onFilter={this.onFilter} />
          <ContactList
            contacts={filteredContact}
            onRemoveContact={this.onRemoveContact}
          />
        </Section>
      </div>
    );
  }
}
