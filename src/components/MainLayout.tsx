import * as React from 'react';
import Nav from './Nav';
import ItemList from './ItemList';
import EditorPane from './EditorPane';

export default class MainLayout extends React.PureComponent {
    render () {
        return (
        <div id="layout" className="content pure-g">
            <Nav />        
            <ItemList />
            <EditorPane />
        </div>);
    }
}