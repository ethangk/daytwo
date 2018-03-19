import * as actions from '../actions/';
import { connect, Dispatch } from 'react-redux';
import Item from '../components/Item';

interface DispatchFromProps {
  selectItem: (id: number) => void;
}

function mapDispatchToProps(dispatch: Dispatch<actions.ActionTypes>): DispatchFromProps {
  return {
    selectItem: (id: number) => dispatch(actions.selectEntry(id))
  };
}

export default connect<void, DispatchFromProps, void>(
  null, mapDispatchToProps
)(Item);
