import * as React from 'react';
import NavContainer from '../containers/NavContainer';
import ItemListContainer from '../containers/ItemListContainer';
import EditorPaneContainer from '../containers/EditorPaneContainer';

export default class MainLayout extends React.PureComponent {
    render () {
        return (
        <div id="layout" className="content pure-g">
            <NavContainer />        
            <ItemListContainer />
            <EditorPaneContainer />
        </div>);
    }
}