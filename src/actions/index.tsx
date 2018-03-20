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

export interface SelectEntry {
    type: constants.SET_CURRENT_ENTRY;
    id: number;
}

export function selectEntry(id: number): SelectEntry {
    return {
        type: constants.SET_CURRENT_ENTRY,
        id
    };
}

export interface DeleteEntry {
    type: constants.DELETE_ENTRY;
    id: number;
}

export function deleteEntry(id: number): DeleteEntry {
    return {
        type: constants.DELETE_ENTRY,
        id
    };
}

export type ActionTypes = SetEditorContent | AddEntry | SelectEntry | DeleteEntry;