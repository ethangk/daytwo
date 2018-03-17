import * as React from 'react';
import * as actions from '../actions/';
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
  return {
    content: state.editorContent
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
