import React from 'react'
import List from './components/List'

class App extends React.Component {
  state = {
    contacts: [
      {
        name: { first: 'Jerry Ferdinand', last: 'Kowalsky' },
        telephone: '(389)-947-3295',
        email: 'jfk.owalsky@example.com',
        key: '1525616622179'
      },
      {
        name: { first: 'Arthur', last: 'di Thun' },
        telephone: '(393)-732-9907',
        email: 'arthu.di.thu@example.com',
        key: '1525616824726'
      },
    ]
  }
  render() {
    return (
      <div>
        <List
          contactsList={this.state.contacts}
        />
      </div>
    )
  }
}

export default App
