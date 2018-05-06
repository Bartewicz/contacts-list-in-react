import React from 'react'
import Contact from './Contact'

const List = ({ contactsList, deleteContactFunction }) => (
  <div>
    <h1>
      Welcome to your contacts list!
    </h1>
    {
      contactsList.map(contact => (
        <Contact
          name={contact.name}
          telephone={contact.telephone}
          email={contact.email}
          key={contact.key}
          deleteContact={() => deleteContactFunction(contact.key)}
        />
      ))
    }
  </div>
)

export default List