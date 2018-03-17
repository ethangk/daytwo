// src/reducers/index.tsx

import { ActionTypes } from '../actions';
import { StoreState } from '../types/index';
import { SET_EDITOR_CONTENT, ADD_ENTRY } from '../constants/index';

export function editor(state: StoreState, action: ActionTypes): StoreState {
  switch (action.type) {
    case SET_EDITOR_CONTENT:
      return { ...state, editorContent: action.content };
    case ADD_ENTRY:
      return {
        ...state,
        entries: [...state.entries, action.entry]
      };
    default:
      return state;
  }
}
