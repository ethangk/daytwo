import * as actions from '../actions/';
import { connect, Dispatch } from 'react-redux';
import EditorPane from '../components/EditorPane';

interface DispatchFromProps {
  editClick: () => void;
  deleteClick: () => void;
}

function mapDispatchToProps(dispatch: Dispatch<actions.ActionTypes>) {
  return {
    editClick: () => {
      // do something
    },
    deleteClick: () => {
      // do something
    }
  };
}

export default connect<void, DispatchFromProps, void>(null, mapDispatchToProps)(EditorPane);
