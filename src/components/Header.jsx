import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../pages/Loading';
import { getUser } from '../services/userAPI';

class Header extends Component {
  state = {
    name: '',
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({
      isLoading: true,
    });
    const test = await getUser();
    this.setState({
      name: test.name,
      isLoading: false,
    });
  }

  render() {
    const { name, isLoading } = this.state;
    return (
      <header data-testid="header-component">
        {isLoading ? <Loading /> : (

          <>
            <h1 data-testid="header-user-name">
              {name}
            </h1>
            <Link to="/search" data-testid="link-to-search">Pesquisar</Link>
            <Link to="/favorites" data-testid="link-to-favorites">Favoritos</Link>
            <Link to="/profile" data-testid="link-to-profile">Perfil</Link>
          </>
        )}
      </header>
    );
  }
}

export default Header;
