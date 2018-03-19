// src/reducers/index.tsx

import { ActionTypes } from '../actions';
import { StoreState } from '../types/index';
import { SET_EDITOR_CONTENT, ADD_ENTRY, SET_CURRENT_ENTRY } from '../constants/index';

export function editor(state: StoreState, action: ActionTypes): StoreState {
  switch (action.type) {
    case SET_EDITOR_CONTENT:
      return { ...state, editorContent: action.content };
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
    default:
      return state;
  }
}
