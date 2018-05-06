import React from 'react'
import Contact from './Contact'

const List = ({ contactsList }) => (
  <div>
    {
      contactsList.map(contact => (
        <Contact
          name={contact.name}
          telephone={contact.telephone}
          email={contact.email}
          key={contact.key}
        />
      ))
    }
  </div>
)

export default List