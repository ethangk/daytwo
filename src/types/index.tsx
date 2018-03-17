// src/types/index.tsx

export interface Entry {
    name: string;
    created: number;
    updated: number;
    content: string;
    id: number;
}

export interface StoreState {
    editorContent: string;
    current: number;
    entries: Array<Entry>;
}
