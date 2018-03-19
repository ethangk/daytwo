import * as types from '../types/';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import ItemList from '../components/ItemList';

interface StateFromProps {
  entries: Array<types.Entry>;
}

function mapStateToProps(state: StoreState) {
  return {
    entries: state.entries
  };
}

export default connect<StateFromProps, void, void>(mapStateToProps)(ItemList);
