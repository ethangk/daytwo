import * as React from 'react';

export interface Props {
  content: string;
  onChange: (e: React.FormEvent<HTMLTextAreaElement>) => void;
}

export default function ContentBox({ content, onChange }: Props): JSX.Element {
  return (
    <div>
      <textarea value={content} onChange={onChange} />
      <p>
        {content}
      </p>
    </div>
  );
}
