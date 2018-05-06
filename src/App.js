import React from 'react'
import List from './components/List'

class App extends React.Component {
  state = {
    contacts: [
      {
        name: { first: 'Jerry Ferdinand', last: 'Kovalsky' },
        telephone: '(389)-947-3295',
        email: 'jfk.oval.sky@example.com',
        key: 1525616622179
      },
      {
        name: { first: 'Arthur', last: 'di Thun' },
        telephone: '(393)-732-9907',
        email: 'arthu.di.thu@example.com',
        key: 1525616824726
      },
    ]
  }

deleteContact = (contactKey) => {
  const newContacts = this.state.contacts.filter(contact => contactKey !== contact.key)
  this.setState({
    contacts: newContacts
  })
}

  render() {
    return (
      <div>
        <List
          contactsList={this.state.contacts}
          deleteContactFunction={this.deleteContact}
        />
      </div>
    )
  }
}

export default App
