import * as React from 'react';
import * as classNames from 'classnames';

interface ItemProps {
    name: string;
    subject: string;
    description?: string;
    selected?: boolean;
    unread?: boolean;
}
   
const Item: React.SFC<ItemProps> = (props) => {
    const containerClasses = classNames({
        'email-item': true,
        'pure-g': true,
        'email-item-selected': props.selected,
        'email-item-unread': props.unread
    });
    
    return (
        <div className={containerClasses}>
            <div className="pure-u">
                <h5 className="email-name">{props.name}</h5>
                <h4 className="email-subject">{props.subject}</h4>
                <p className="email-desc">{props.description}</p>
            </div>
        </div>
    );
};
   
Item.defaultProps = {
    description: '',
    selected: false,
    unread: false
};

export default Item;