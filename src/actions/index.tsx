import * as constants from '../constants';
import * as types from '../types';

export interface SetEditorContent {
    type: constants.SET_EDITOR_CONTENT;
    content: string;
}

export function setEditorContent(content: string): SetEditorContent {
    return {
        type: constants.SET_EDITOR_CONTENT,
        content
    };
}

export interface AddEntry {
    type: constants.ADD_ENTRY;
    entry: types.Entry;
}

export function addEntry(entry: types.Entry): AddEntry {
    return {
        type: constants.ADD_ENTRY,
        entry
    };
}

export type ActionTypes = SetEditorContent | AddEntry;