import * as React from 'react';
import * as actions from '../actions/';
import * as types from '../types/';
import { StoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';
import ContentBox from '../components/ContentBox';

interface StateFromProps {
  content: string;
}

interface DispatchFromProps {
  onChange: (e: React.FormEvent<HTMLTextAreaElement>) => void;
}

function mapStateToProps(state: StoreState) {
  const currentEntry: types.Entry | undefined = state
    .entries.find(entry => entry.created === state.current) || undefined;
  return {
    content:  (currentEntry && currentEntry.content) || ''
  };
}

function onChangeHandler(e: React.FormEvent<HTMLTextAreaElement>, dispatch: Dispatch<actions.SetEditorContent>): void {
    const value: string = (e.target as HTMLTextAreaElement).value;
    dispatch(actions.setEditorContent(value));
}

function mapDispatchToProps(dispatch: Dispatch<actions.SetEditorContent>) {
  return {
    onChange: (e: React.FormEvent<HTMLTextAreaElement>) => {
      onChangeHandler(e, dispatch);
    }
  };
}

export default connect<StateFromProps, DispatchFromProps, void>(mapStateToProps, mapDispatchToProps)(ContentBox);
