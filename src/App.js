import React from 'react'

import List from './components/List'
import AddNewContact from './components/AddNewContact'
import Header from './components/UI/Header'
import PaperRedefined from './components/UI/PaperRedefined'
import validateTelephone from './components/validateTelephone'

class App extends React.Component {
  state = {
    contacts: [],
    newContactName: '',
    newContactTelephone: '',
    newContactEmail: '',
  }

  componentDidMount() {
    localStorage.getItem('contacts') ?
      this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) })
      :
      this.setState({
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
          }
        ]
      })
  }

  validation = (callback) => {
    !this.state.newContactName ?
      alert('A name is required')
      :
      !this.state.newContactTelephone ?
        alert('A telephone number is required')
        :
        !validateTelephone(this.state.newContactTelephone) ?
          alert('Only an integer, dash or parentheses are available in telephone number field')
          :
          !this.state.newContactEmail ?
            alert('An email address is required')
            :
            !this.state.newContactEmail.includes('@') ?
              alert('Incorrect email address')
              :
              this.state.newContactEmail
                .slice(-4, -2)
                .split('')
                .filter(el => el === '.')
                .length !== 1 ?
                alert('Incorrect email address')
                :
                this.addContact(callback)
  }

  addContact = () => {
    const newContact = {
      name: this.state.newContactName,
      telephone: this.state.newContactTelephone,
      email: this.state.newContactEmail,
      key: Date.now()
    }

    const newContacts = this.state.contacts.concat(newContact)

    localStorage.setItem('contacts', JSON.stringify(newContacts))

    this.setState({
      contacts: newContacts,
      newContactName: '',
      newContactTelephone: '',
      newContactEmail: '',
    })
  }

  newContactNameHandler = (event, newContactName) => this.setState({
    newContactName
  })

  newContactTelephoneHandler = (event, newContactTelephone) => {
    this.setState({ newContactTelephone })
  }

  newContactEmailHandler = (event, newContactEmail) => {
    this.setState({ newContactEmail })
  }

  deleteContact = (contactKey) => {
    const newContacts = this.state.contacts.filter(contact => contactKey !== contact.key)

    localStorage.setItem('contacts', JSON.stringify(newContacts))

    this.setState({
      contacts: newContacts
    })
  }

  render() {
    return (
      <div>
        <Header>
          Welcome to your contacts list!
        </Header>
        <AddNewContact
          addContact={this.validation}
          nameHandler={this.newContactNameHandler}
          telephoneHandler={this.newContactTelephoneHandler}
          emailHandler={this.newContactEmailHandler}
          newName={this.state.newContactName}
          newTelephone={this.state.newContactTelephone}
          newEmail={this.state.newContactEmail}
        />
        {
          !this.state.contacts ?
            <PaperRedefined>
              Loading...
            </PaperRedefined>
            :
            <List
              contactsList={this.state.contacts}
              deleteContactFunction={this.deleteContact}
            />
        }
      </div>
    )
  }
}

export default App
