import React from 'react'
import PropTypes from 'prop-types'
import SocialLogin from './SocialLogin'

const Button = ({ children, triggerLogin, ...props }) => {
  return (
    <button onClick={triggerLogin} {...props}>
      { children }
    </button>
  )
}

export default SocialLogin(Button)
