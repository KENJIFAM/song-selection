import Song from "../models/song";
import { combineReducers } from 'redux';
import { Action, ActionTypes } from "../actions";

const songsReducer = () => {  
  return [
    { title: 'No Scrubs', duration: '4:05'},
    { title: 'Macarena', duration: '2:30'},
    { title: 'All Start', duration: '3:15'},
    { title: 'I don\'t know', duration: '1:45'}
  ];
};

const selectedSongReducer = (selectedSong: Song = null, action: Action) => {
  if (action.type === ActionTypes.SONG_SELECTED) {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});