import * as React from 'react';

export interface Props {
  content: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

export default function ContentBox({ content, onChange }: Props): JSX.Element {
  return (
    <div>
      <input type="text" value={content} onChange={onChange} />
      <p>
        {content}
      </p>
    </div>
  );
}
