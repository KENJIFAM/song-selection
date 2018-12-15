import Song from "../models/song";

export enum ActionTypes {
  SONG_SELECTED = '[songs] SONG_SELECTED'
};

export interface SelectSongAction {
  type: ActionTypes.SONG_SELECTED,
  payload?: Song
}

export const selectSong = (song: Song): SelectSongAction => {
  return {
    type: ActionTypes.SONG_SELECTED,
    payload: song
  };
};

export type Action = SelectSongAction;