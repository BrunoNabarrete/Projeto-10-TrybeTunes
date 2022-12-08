import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';

class Album extends Component {
  state = {
    musics: [],
  };

  async componentDidMount() {
    this.musicsApi();
  }

  musicsApi = async () => {
    const { match: { params: { id } } } = this.props;
    const musicReturn = await getMusics(id);
    this.setState(({
      musics: musicReturn,
    }));
  };

  render() {
    const { musics } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <h3 data-testid="artist-name">
          { musics[0] && musics[0].artistName }
        </h3>
        <h4 data-testid="album-name">

          { musics[0] && musics[0].collectionName }
        </h4>
        { musics.map((song, index) => (index > 0 && <MusicCard
          previewUrl={ song.previewUrl }
          key={ song.trackId }
          trackName={ song.trackName }
          trackId={ song.trackId }
          { ...song }
        />))}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Album;
