import React, { Component } from 'react';
import EditorJournalistListInfo from './EditorJournalistListInfo';

class EditorJournalistList extends Component {
    render(){
        const journalistNodes = this.props.journalists.map(journalist => {
            return(
                <EditorJournalistListInfo key={journalist.id}>{journalist}</EditorJournalistListInfo>
            );
        });

        return(
            <div className="journalist-list-container">
                <ul>
                    {journalistNodes}
                </ul>
            </div>
        );
    }
}

export default EditorJournalistList;
