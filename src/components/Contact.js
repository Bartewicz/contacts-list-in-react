import React from 'react'

const Contact = ({ name, telephone, email, deleteContact }) => (
  <div>
    <h2>
      {name.first} {name.last}
    </h2>
    <p>
      {telephone + ', ' + email}
    </p>
    <button
      onClick={deleteContact}
    >
      X
    </button>
  </div>
)

export default Contact