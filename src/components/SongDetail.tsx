import * as React from 'react';
import { connect } from 'react-redux';
import Song from '../models/song';

interface State {
  selectedSong: Song
};

const SongDetail = ({ selectedSong }) => {  
  if (!selectedSong) {
    return <div>Select a song</div>;
  }

  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {selectedSong.title}
        <br />
        Duration: {selectedSong.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);