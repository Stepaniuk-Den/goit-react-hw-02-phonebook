import { Component } from "react";
import Form from "./Form/Form";
import Section from "./Section/Section";
// import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

render() {
  return (
    <div className="container">
      <Section title="Phonebook">
      <Form/>
      </Section>
    </div>
  );
};
}
