import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import PaperRedefined from './UI/PaperRedefined'

const AddNewContact = ({ nameHandler, telephoneHandler, emailHandler, newName, newTelephone, newEmail, clickHandler }) => (
  <PaperRedefined>
    <TextField
      onChange={nameHandler}
      name={'contacts-name'}
      hintText=''
      floatingLabelText="Name"
      fullWidth={true}
      value={newName}
    />
    <TextField
      onChange={telephoneHandler}
      name={'contacts-name'}
      hintText=''
      floatingLabelText="Telephone"
      fullWidth={true}
      value={newTelephone}
    />
    <TextField
      onChange={emailHandler}
      name={'contacts-name'}
      hintText=''
      floatingLabelText="Email"
      fullWidth={true}
      value={newEmail}
    />
    <RaisedButton
      onClick={clickHandler}
      primary={true}
      fullWidth={true}
      label={'ADD'}
    />
  </PaperRedefined>
)

export default AddNewContact