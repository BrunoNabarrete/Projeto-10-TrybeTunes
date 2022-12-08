import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';
import Loading from './Loading';
// import '../style/login.sass';

class Login extends Component {
  state = {
    nameLogin: '',
    isSavedButtonDisable: true,
    isLoading: false,
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const { value } = target;
    this.setState({ [name]: value }, () => {
      const { nameLogin } = this.state;
      const validationRole = 2;
      const newStatusButton = nameLogin.length <= validationRole;
      this.setState({
        isSavedButtonDisable: newStatusButton,
      });
    });
  };

  saveLogin = async (event) => {
    event.preventDefault();
    const { nameLogin } = this.state;
    const { history } = this.props;
    this.setState({
      isLoading: true,
    });
    await createUser({ name: nameLogin });
    this.setState({
      isLoading: false,
    });
    history.push('/search');
  };

  render() {
    const { isSavedButtonDisable, isLoading } = this.state;
    return (
      <div data-testid="page-login">
        { isLoading ? <Loading /> : (
          <form action="">
            <label htmlFor="name">
              Nome:
              <input
                type="text"
                name="nameLogin"
                id="name"
                data-testid="login-name-input"
                onChange={ this.onInputChange }
              />
            </label>
            <button
              type="submit"
              data-testid="login-submit-button"
              disabled={ isSavedButtonDisable }
              onClick={ this.saveLogin }
            >
              Entrar
            </button>
          </form>
        )}
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.string.isRequired,
};

export default Login;
