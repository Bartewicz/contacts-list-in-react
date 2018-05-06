import React from 'react'
import Paper from 'material-ui/Paper'

const styles = {
  paper: {
    margin: '15px',
    padding: '1px 15px 15px 15px'
  }
}

const PaperRedefined = (props) => (
  <Paper zDepth={2} style={styles.paper}>
    {props.children}
  </Paper>
)

export default PaperRedefined