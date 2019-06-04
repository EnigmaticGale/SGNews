import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class EditorJournalistListInfo extends Component{

  render(){

    return(

      <div>
          <li><Link to = {`/editor/journalists/${this.props.children.id}`}>{this.props.children.name} </Link>| {this.props.children.bio} <Link to = {`/editor/journalists/${this.props.children.id}/edit`}>EDIT </Link></li>
      </div>
    )
  }
}

export default EditorJournalistListInfo;
