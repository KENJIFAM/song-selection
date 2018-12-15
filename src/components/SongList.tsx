import * as React from 'react';
import { connect } from 'react-redux';
import { selectSong, SelectSongAction } from '../actions';
import Song from '../models/song';

interface State {
  songs: Song[]
}

interface SongListProps {
  songs: Song[],
  selectSong: (song: Song) => SelectSongAction
}

class SongList extends React.Component<SongListProps, {}> {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className='item' key={song.title}>
          <div className='right floated content'>
            <button 
              className='ui button primary'
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className='content'>{song.title}</div>
        </div>
      );
    })
  }
  
  render() {
    return <div className='ui divided list'>{this.renderList()}</div>;
  };
};

const mapStateToProps = (state: State) => {  
  return { songs: state.songs };
};

export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);