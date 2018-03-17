import * as React from 'react';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';
import ContentBox from '../components/ContentBox';

interface StateFromProps {
  content: string;
}

interface DispatchFromProps {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

function mapStateToProps(state: StoreState) {
  return {
    content: state.editorContent
  };
}

function onChangeHandler(e: React.FormEvent<HTMLInputElement>, dispatch: Dispatch<actions.EditorAction>): void {
    const value: string = (e.target as HTMLInputElement).value;
    dispatch(actions.setEditorContent(value));
}

function mapDispatchToProps(dispatch: Dispatch<actions.EditorAction>) {
  return {
    onChange: (e: React.FormEvent<HTMLInputElement>) => {
      onChangeHandler(e, dispatch);
    }
  };
}

export default connect<StateFromProps, DispatchFromProps, void>(mapStateToProps, mapDispatchToProps)(ContentBox);
