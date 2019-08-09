import React from 'react';
import PropTypes from 'prop-types';

const Login = (props) => (
  <nav className="login">
    <h2>Invetory Login</h2>
    <p>Sign In to manage your store's inventory.</p>
    <button className="github" onClick={() => props.authenticate('Github')}>
      Login With Github
    </button>
    <button className="twitter" onClick={() => props.authenticate('Twitter')}>
      Login With Twitter
    </button>
    <button className="facebook" onClick={() => props.authenticate('Facebook')}>
      Login With Facebook
    </button>
  </nav>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
}

export default Login;