// src/reducers/index.tsx

import { EditorAction } from '../actions';
import { StoreState } from '../types/index';
import { SET_EDITOR_CONTENT } from '../constants/index';

export function editor(state: StoreState, action: EditorAction): StoreState {
  switch (action.type) {
    case SET_EDITOR_CONTENT:
      return { ...state, editorContent: action.content };
    default:
      return state;
  }
}
