import * as actions from '../actions/';
import * as types from '../types/';
import { connect, Dispatch } from 'react-redux';
import Nav from '../components/Nav';

interface DispatchFromProps {
  createEntry: () => void;
}

function constructEmptyEntry(): types.Entry {
  const emptyEntry: types.Entry = {
    name: 'helloName',
    created: new Date().getTime(),
    updated: 1,
    content: 'helloContent'
  };
  return emptyEntry;
}

function mapDispatchToProps(dispatch: Dispatch<actions.ActionTypes>) {
  return {
    createEntry: () => dispatch(actions.addEntry(constructEmptyEntry()))
  };
}

export default connect<void, DispatchFromProps, void>(null, mapDispatchToProps)(Nav);
