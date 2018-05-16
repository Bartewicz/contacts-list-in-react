import React from 'react'

const styles = {
  h1: {
    margin: '15px'
  }
}

const Header = (props) => (
  <h1 style={styles.h1}>
    {props.children}
  </h1>
)

export default Header