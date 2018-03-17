import * as constants from '../constants';

export interface SetEditorContent {
    type: constants.SET_EDITOR_CONTENT;
    content: string;
}

export type EditorAction = SetEditorContent;

export function setEditorContent(content: string): SetEditorContent {
    return {
        type: constants.SET_EDITOR_CONTENT,
        content
    };
}
