import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import TextareaAutosize from 'react-textarea-autosize';
export interface Props {
  content: string;
  onChange: (e: React.FormEvent<HTMLTextAreaElement>) => void;
  editing: boolean;
}

function generateTextArea({content, onChange}: Props): JSX.Element {
  return (
    <TextareaAutosize className="editor-box" value={content} onChange={onChange} />
  );
}

function generateRenderedText({ content }: Props): JSX.Element {
  return (<ReactMarkdown source={content} />);
}

export default function ContentBox({ content, editing, onChange }: Props): JSX.Element {
  const element: JSX.Element = (editing ?
    generateTextArea({content, onChange, editing}) :
    generateRenderedText({content, onChange, editing})
  );
  return (
    <div>
      {element}
    </div>
  );
}
