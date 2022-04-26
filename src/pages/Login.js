import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Login({ history }) {
  const [stateEmail, setStateEmail] = useState('');
  const [statePassword, setStatePassword] = useState('');
  const [isDisable, setIsDisable] = useState(true);

  const loginValidation = () => {
    const SETE = 6;
    if (statePassword.length >= SETE
      && stateEmail.includes('@')
      && stateEmail.includes('.com')) {
      return setIsDisable(false);
    } return setIsDisable(true);
  };

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'email') setStateEmail(value);
    if (name === 'password') setStatePassword(value);
    loginValidation();
  };

  const handleCLick = (e) => {
    e.preventDefault();
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email: stateEmail }));
    history.push('/comidas');
  };

  // useEffect(() => {
  //   loginValidation();
  // }, [stateEmail, statePassword]);

  return (
    <div className="login-container">
      <input
        placeholder="Email"
        className="email-input"
        data-testid="email-input"
        type="email"
        onChange={ handleChange }
        value={ stateEmail }
        name="email"
      />
      <input
        placeholder="Senha"
        className="password-input"
        data-testid="password-input"
        type="password"
        onChange={ handleChange }
        value={ statePassword }
        name="password"
      />
      <button
        type="submit"
        data-testid="login-submit-btn"
        disabled={ isDisable }
        onClick={ handleCLick }
      >
        Enter
      </button>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
