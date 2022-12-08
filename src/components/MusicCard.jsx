import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../pages/Loading';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';

class MusicCard extends Component {
  state = {
    isChecked: false,
    isLoading: false,
    favoriteSaved: [],
  };

  async componentDidMount() {
    const saved = await getFavoriteSongs();
    this.setState({
      isLoading: false,
      favoriteSaved: saved,
    });
  }

  favoriteButton = async ({ target }) => {
    const { checked } = target;
    this.setState({ isChecked: checked, isLoading: true });
    await addSong(this.props);
    this.setState({ isLoading: false });
  };

  render() {
    const { previewUrl, trackName, trackId } = this.props;
    const { isLoading, isChecked, favoriteSaved } = this.state;
    return (
      <div>
        <h3>{ trackName }</h3>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          <code>audio</code>
          .
        </audio>
        {isLoading ? <Loading />
          : (
            <label
              htmlFor={ `favoriteMusic-${trackId}` }
            >
              <input
                data-testid={ `checkbox-music-${trackId}` }
                type="checkbox"
                id="favoriteMusic"
                checked={ !isChecked ? favoriteSaved.some((e) => e.trackId === trackId)
                  : isChecked }
                onChange={ this.favoriteButton }
              />
              Favorita
            </label>

          )}

      </div>

    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
};

export default MusicCard;
