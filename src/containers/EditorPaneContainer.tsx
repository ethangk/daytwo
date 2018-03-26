import * as actions from '../actions/';
import * as types from '../types/';
import { connect, Dispatch } from 'react-redux';
import EditorPane from '../components/EditorPane';

interface DispatchFromProps {
  editClick: () => void;
  deleteClick: (id: number) => void;
}

function mapDispatchToProps(dispatch: Dispatch<actions.ActionTypes>) {
  return {
    editClick: () => {
      // do something
      dispatch(actions.toggleEditing());
    },
    deleteClick: (id: number) => {
      // do something
      dispatch(actions.deleteEntry(id));
    }
  };
}

interface StateFromProps {
  name: string | null;
  created: number | null;
  editing: boolean;
}

function mapStateToProps(state: types.StoreState) {
  const currentEntry = state.entries.find(entry => entry.created === state.current) || {
    name: null,
    created: null
  };
  return {
    name: currentEntry.name,
    created: currentEntry.created,
    editing: state.editing
  };
}

export default connect<StateFromProps, DispatchFromProps, void>(mapStateToProps, mapDispatchToProps)(EditorPane);
