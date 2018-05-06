import React from 'react'

import Header from './components/Header'
import List from './components/List'
import AddNewContact from './components/AddNewContact'

class App extends React.Component {
  state = {
    contacts: [
      {
        name: 'Jerry Ferdinand Kovalsky',
        telephone: '(389)-947-3295',
        email: 'jfk.oval.sky@example.com',
        key: 1525616622179
      },
      {
        name: 'Arthur di Thun',
        telephone: '(393)-732-9907',
        email: 'arthu.di.thu@example.com',
        key: 1525616824726
      },
    ],
    newContactName: '',
    newContactTelephone: '',
    newContactEmail: '',
  }

  addContact = () => {
    const newContact = {
      name: this.state.newContactName,
      telephone: this.state.newContactTelephone,
      email: this.state.newContactEmail,
      key: Date.now()
    }

    const newContacts = this.state.contacts.concat(newContact)

    this.setState({
      contacts: newContacts,
      newContactName: '',
      newContactTelephone: '',
      newContactEmail: '',
    })
  }

  newContactNameHandler = (event, newValue) => this.setState({
    newContactName: newValue
  })

  newContactTelephoneHandler = (event, newValue) => this.setState({
    newContactTelephone: newValue
  })

  newContactEmailHandler = (event, newValue) => this.setState({
    newContactEmail: newValue
  })

  deleteContact = (contactKey) => {
    const newContacts = this.state.contacts.filter(contact => contactKey !== contact.key)
    this.setState({
      contacts: newContacts
    })
  }

  render() {
    return (
      <div>
        <Header />
        <AddNewContact
          clickHandler={this.addContact}
          nameHandler={this.newContactNameHandler}
          telephoneHandler={this.newContactTelephoneHandler}
          emailHandler={this.newContactEmailHandler}
          newName={this.state.newContactName}
          newTelephone={this.state.newContactTelephone}
          newEmail={this.state.newContactEmail}
        />
        <List
          contactsList={this.state.contacts}
          deleteContactFunction={this.deleteContact}
        />
      </div>
    )
  }
}

export default App
