import React from 'react'
import Contact from './Contact'

const List = (props) => (
  <div>
    {
      props.contactsList.map(contact => (
        <Contact
          name={contact.name}
          telephone={contact.telephone}
          email={contact.email}
          key={contact.key}
          deleteContact={() => props.deleteContactFunction(contact.key)}
        />
      ))
    }
  </div>
)

export default List