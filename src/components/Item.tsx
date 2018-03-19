import * as React from 'react';
import * as classNames from 'classnames';

interface ItemProps {
    name: string;
    subject: string;
    description?: string;
    selected?: boolean;
    unread?: boolean;
    selectItem: (id: number) => void;
    id: number;
}
   
class Item extends React.PureComponent<ItemProps> {
    public static defaultProps: Partial<ItemProps> = {
        description: '',
        selected: false,
        unread: false,
        selectItem: (id: number) => { return null; }
    };

    render() {
        const containerClasses = classNames({
            'email-item': true,
            'pure-g': true,
            'email-item-selected': this.props.selected,
            'email-item-unread': this.props.unread
        });
    
        const boundSelectItem = this.props.selectItem.bind(null, this.props.id);

        return (
            <div className={containerClasses} onClick={boundSelectItem}>
                <div className="pure-u">
                    <h5 className="email-name">{this.props.name}</h5>
                    <h4 className="email-subject">{this.props.subject}</h4>
                    <p className="email-desc">{this.props.description}</p>
                </div>
            </div>
        );
    }
}

export default Item;