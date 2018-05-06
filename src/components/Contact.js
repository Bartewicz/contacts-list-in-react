import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import SvgIcon from 'material-ui/SvgIcon'

import PaperRedefined from './UI/PaperRedefined'

const styles = {
  paper: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  p: {
    display: 'flex',
    alignItems: 'center'
  },
  icon: {
    margin: '0 5px'
  }
}

const PhoneIcon = (props) => (
  <SvgIcon {...props} style={styles.icon}>
    <path d="M 6.62 10.79 c 1.44 2.83 3.76 5.14 6.59 6.59 l 2.2 -2.2 c 0.27 -0.27 0.67 -0.36 1.02 -0.24 c 1.12 0.37 2.33 0.57 3.57 0.57 c 0.55 0 1 0.45 1 1 V 20 c 0 0.55 -0.45 1 -1 1 c -9.39 0 -17 -7.61 -17 -17 c 0 -0.55 0.45 -1 1 -1 h 3.5 c 0.55 0 1 0.45 1 1 c 0 1.25 0.2 2.45 0.57 3.57 c 0.11 0.35 0.03 0.74 -0.25 1.02 l -2.2 2.2 Z" />
  </SvgIcon>
)

const MailIcon = (props) => (
  <SvgIcon {...props} style={styles.icon}>
    <path d="M 20 4 H 4 c -1.1 0 -1.99 0.9 -1.99 2 L 2 18 c 0 1.1 0.9 2 2 2 h 16 c 1.1 0 2 -0.9 2 -2 V 6 c 0 -1.1 -0.9 -2 -2 -2 Z m 0 4 l -8 5 l -8 -5 V 6 l 8 5 l 8 -5 v 2 Z" />
  </SvgIcon>
)

const Contact = ({ name, telephone, email, deleteContact }) => (
  <PaperRedefined style={styles.paper}>
    <div>
      <h2>
        {name}
      </h2>
      <p style={styles.p}>
        <PhoneIcon />
        {telephone + ','}
        <MailIcon />
        {email}
      </p>
    </div>
    <RaisedButton
      onClick={deleteContact}
      label="Delete"
      secondary={true}
    >
    </RaisedButton>
  </PaperRedefined>
)

export default Contact