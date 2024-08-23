import './App.css';
import { connect } from 'react-redux';
import ContactView from './ContactView';
import { useState } from 'react';

const initData = {
  email: "",
  name: ""
}

function App(props) {
  let [formData, setFormData] = useState(initData);

  function handleChangeEvent(evt) {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }
  function submit() {
    // let contact = {
    //   email: formData["email"],
    //   name: formData["name"]
    // }
    props.addContact(formData);
  }
  return (
    <div className="App">
      <h1> Hello {props.profilepic} </h1>
      <button type="button" onClick={props.clearContacts}>Clear Contacts</button>
      <form>
        Email <input type='email' name="email" onChange={handleChangeEvent} /> <br />
        Name <input type='text' name="name" onChange={handleChangeEvent} /> <br />
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