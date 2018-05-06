import React from 'react'

const Contact = ({ name, telephone, email }) => (
  <div>
    {name.first} {name.last}
    <br />
    {telephone + ', ' + email}
  </div>
)

export default Contact