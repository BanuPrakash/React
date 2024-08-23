import './App.css';
import { connect } from 'react-redux';
import ContactView from './ContactView';
import { useState } from 'react';

function App(props) {
  let [email, setEmail] = useState("");
  let [name, setName] = useState("");
  function submit() {
    let contact = {
      email,
      name
    }
    props.addContact(contact);
  }
  return (
    <div className="App">
      <h1> Hello {props.profilepic} </h1>
      <button type="button" onClick={props.clearContacts}>Clear Contacts</button>
      <form>
        Email <input type='email' onChange={evt => setEmail(evt.target.value)} /> <br />
        Name <input type='text' onChange={evt => setName(evt.target.value)} /> <br />
        <button type='button' onClick={submit}>Add Contact</button>
      </form>
      {
        props.contactlist.map(contact => <ContactView
          key={contact.email} contact={contact} delEvt={props.removeContact} />)
      }
    </div>
  );
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(App);

function mapStateToProps(state) {
  return {
    contactlist: state.contacts,
    profilepic: state.profile.avatar
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addContact: contact => dispatch({ type: 'ADD_CONTACT', payload: contact }),
    removeContact: email => dispatch({ type: 'REMOVE_CONTACT', payload: email }),
    clearContacts: () => dispatch({ type: 'CLEAR_CONTACTS' })
  }
}