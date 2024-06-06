import React from 'react'
import PropTypes from 'prop-types';

export default function Header(props) {
  return (
    <nav>

        <h1>{props.title}</h1>

    </nav>
  )
}

Header.defaultProps = {
  title : 'Your Title Here'
}

Header.propTypes = {
  title: PropTypes.string
}