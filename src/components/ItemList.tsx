import * as React from 'react';
import Item from './Item';

export default class ItemList extends React.PureComponent {
    render() {
        return (
            <div id="list" className="pure-u-1">
                <Item
                    name="Something"
                    description="Something else"
                    subject="Cool"
                    selected={true}
                />

                <Item
                    name="Eric Ferraiuolo"
                    description="Hey, I had oks better on mobile."
                    subject="Re: Pull Requests"
                    unread={true}
                />
        
                <Item
                    name="YUI Library"
                    description="Duis aute irure dolor in reprehenderit in voluptate
                        velit essecillum dolore eu fugiat nulla."
                    subject="You have 5 bugs assigned to you"
                    unread={true}
                />
        
                <Item
                    name="Reid Burke"
                    description="Excepteur sint occaecat cupidatat non proident, sunt in culpa."
                    subject="Re: Design Language"
                />
        
                <Item
                    name="Andrew Wooldridge"
                    subject="YUI Blog Updates?"
                    description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
                />
        
                <Item
                    name="Yahoo! Finance"
                    subject="How to protect your finances from winter storms"
                    description="Mauris tempor mi vitae sem aliquet pharetra. Fusce in dui purus, nec malesuada mauris."
                />
        
                <Item
                    name="Yahoo! News"
                    subject="Summary for April 3rd, 2012"
                    description="We found 10 news articles that you may like."
                />
            </div>
        );
    }
}