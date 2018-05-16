import React from 'react'

import Snackbar from 'material-ui/Snackbar'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import PaperRedefined from './UI/PaperRedefined'

class AddNewContact extends React.Component {
  state = {
    isSnackbarOpen: false
  }

  toggleSnackbar = (callback) => {
    this.setState({
      isSnackbarOpen: !this.state.isSnackbarOpen,
    })
  }

  render() {
    return (
      <PaperRedefined>
        <TextField
          onChange={this.props.nameHandler}
          name={'contacts-name'}
          hintText='Type name of your contact'
          floatingLabelText="Name"
          fullWidth={true}
          value={this.props.newName}
        />
        <TextField
          onChange={this.props.telephoneHandler}
          name={'contacts-name'}
          hintText='Type telephone number'
          floatingLabelText="Telephone"
          fullWidth={true}
          type='tel'
          value={this.props.newTelephone}
        />
        <TextField
          onChange={this.props.emailHandler}
          name={'contacts-name'}
          hintText='Type email address'
          floatingLabelText="Email"
          fullWidth={true}
          value={this.props.newEmail}
        />
        <RaisedButton
          onClick={() => { this.props.addContact(this.toggleSnackbar) }}
          primary={true}
          fullWidth={true}
          label={'ADD'}
        />
        <Snackbar
          open={this.state.isSnackbarOpen}
          message="Your contact has been added!"
          autoHideDuration={4000}
          onRequestClose={this.toggleSnackbar}
        />
      </PaperRedefined >
    )
  }
}

  export default AddNewContact