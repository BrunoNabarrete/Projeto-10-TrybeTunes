import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';

class Search extends Component {
  state = {
    artist: '',
    isSearchButtonDisable: true,
    isLoading: false,
    nameExibition: '',
    colectionMusic: [],
    validationColection: true,
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const { value } = target;
    this.setState({ [name]: value }, () => {
      const { artist } = this.state;
      const validationRole = 1;
      const newStatusButton = artist.length <= validationRole;
      this.setState({
        isSearchButtonDisable: newStatusButton,
      });
    });
  };

  searchButton = async (event) => {
    event.preventDefault();
    const { artist } = this.state;
    this.setState({
      isLoading: true,
      nameExibition: artist,
    });
    const artistReturn = await searchAlbumsAPI(artist);
    if (artistReturn !== []) {
      this.setState({
        validationColection: artistReturn.length === 0,
      });
    }
    this.setState({
      artist: '',
      isLoading: false,
      colectionMusic: artistReturn,
    });
  };

  render() {
    const {
      isSearchButtonDisable,
      isLoading, nameExibition,
      colectionMusic,
      validationColection,
    } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <div>
          {isLoading ? <Loading /> : (
            <form>
              <label htmlFor="artist">
                <input
                  type="text"
                  name="artist"
                  id="artist"
                  data-testid="search-artist-input"
                  onChange={ this.onInputChange }
                />
              </label>
              <button
                type="submit"
                data-testid="search-artist-button"
                disabled={ isSearchButtonDisable }
                onClick={ this.searchButton }
              >
                Pesquisar

              </button>

            </form>

          )}
          <div>
            <p>
              Resultado de álbuns de:
              {' '}
              {nameExibition}
            </p>
          </div>
          <div>
            {validationColection ? <h1>Nenhum álbum foi encontrado</h1>
              : colectionMusic.map((colection) => (
                <div key={ colection.collectionId }>
                  <p>{colection.artistName}</p>
                  <p>{colection.collectionName}</p>
                  <img
                    src={ colection.artworkUrl100 }
                    alt={ colection.artistName }
                  />
                  <Link
                    to={ `/album/${colection.collectionId}` }
                    data-testid={ `link-to-album-${colection.collectionId}` }
                  >
                    Album

                  </Link>
                </div>

              ))}
          </div>

        </div>
      </div>
    );
  }
}

export default Search;
