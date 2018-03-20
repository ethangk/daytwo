import * as types from '../types/';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import ItemList from '../components/ItemList';

interface StateFromProps {
  entries: Array<types.Entry>;
  current: number;
}

function sortEntries(a: types.Entry, b: types.Entry): number {
  if (a.created === b.created) {
    return 0;
  }
  return (a.created > b.created ? -1 : 1);
}

function mapStateToProps(state: StoreState) {
  return {
    entries: state.entries.sort(sortEntries),
    current: state.current
  };
}

export default connect<StateFromProps, void, void>(mapStateToProps)(ItemList);
