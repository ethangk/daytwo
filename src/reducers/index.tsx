// src/reducers/index.tsx

import { ActionTypes } from '../actions';
import * as types from '../types';
import { StoreState } from '../types/index';
import { SET_EDITOR_CONTENT, ADD_ENTRY, SET_CURRENT_ENTRY, DELETE_ENTRY } from '../constants/index';

export function editor(state: StoreState, action: ActionTypes): StoreState {
  switch (action.type) {
    case SET_EDITOR_CONTENT:
      const currentEntry: types.Entry | undefined = state.entries.find(entry => entry.created === state.current);
      let entries = null;

      if (currentEntry) {
        const newEntry = {
          ...currentEntry,
          content: action.content
        };
        entries = [...state.entries.filter(entry => entry.created !== state.current), newEntry];
      }

      return {
        ...state,
        editorContent: action.content,
        entries: entries || state.entries
      };
    case ADD_ENTRY:
      return {
        ...state,
        entries: [...state.entries, action.entry]
      };
    case SET_CURRENT_ENTRY:
      return {
        ...state,
        current: action.id
      };
    case DELETE_ENTRY:
      return {
        ...state,
        entries: state.entries.filter(entry => entry.created !== action.id)
      };
    default:
      return state;
  }
}
