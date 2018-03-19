import * as React from 'react';
import ItemContainer from '../containers/ItemContainer';

import * as types from '../types/index';

interface ItemListProps {
    entries: Array<types.Entry>;
}

const ItemList: React.SFC<ItemListProps> = (props) => {
    const itemArray: Array<JSX.Element> = props.entries.map((entry: types.Entry) => {
        return (
            <ItemContainer
                name={entry.name}
                subject={'hello'}
                description={'hello2'}
                key={entry.created}
                id={entry.created}
            />
        );
    });

    return (
        <div id="list" className="pure-u-1">
            {itemArray}
        </div>
    );
};

export default ItemList;