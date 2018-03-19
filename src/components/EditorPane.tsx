import * as React from 'react';
import ContentBoxContainer from '../containers/ContentBoxContainer';

interface EditorPaneProps {
    editClick: () => void;
    deleteClick: () => void;
}

const EditorPane: React.SFC<EditorPaneProps> = (props) => {
    return (
        <div id="main" className="pure-u-1">
            <div className="email-content">
                <div className="email-content-header pure-g">
                    <div className="pure-u-1-2">
                        <h1 className="email-content-title">Hello from Toronto</h1>
                        <p className="email-content-subtitle">
                            From <a>Tilo Mitra</a> at <span>3:56pm, April 3, 2012</span>
                        </p>
                    </div>
    
                    <div className="email-content-controls pure-u-1-2">
                        <button className="secondary-button pure-button" onClick={props.editClick}>Edit</button>
                        <button className="secondary-button pure-button" onClick={props.deleteClick}>Delete</button>
                    </div>
                </div>
    
                <div className="email-content-body">
                    <ContentBoxContainer />
                </div>
            </div>
        </div>
    );
};

export default EditorPane;
