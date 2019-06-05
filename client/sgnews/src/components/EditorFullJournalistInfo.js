import React, { Component, Fragment } from 'react';
import {Link, Redirect} from 'react-router-dom';
import DeletePopover from './DeletePopover';

class EditorFullJournalistInfo extends Component{
  constructor(props){
    super(props);

    this.state = {}
    this.handleDelete = this.handleDelete.bind(this);

  }

  handleDelete(){
    console.log("Delete journalist logging")
    this.props.deleteJournalist(this.props.journalist)
    this.setState({redirect: true})
  }

  render(){
    let articles = [];
    if (this.props.journalist.articles){
      articles = this.props.journalist.articles.map((article, index) =>{
        return (
          <Fragment key = {index} >
          <li >{article.headline}</li>
          </Fragment>
        )
      })}
      if (this.state.redirect){
        return (
          <Redirect to = "/editor/journalists" />
        )
      } else {
        return(
          <div>
          <h1>{this.props.journalist.name}</h1>
          <img src={this.props.journalist.image} alt = ""></img>
          <p>{this.props.journalist.bio}</p>

          <Link to ={`/editor/journalists/${this.props.journalist.id}/edit`}>EDIT</Link>

          <DeletePopover onDelete={this.handleDelete}></DeletePopover>

          {articles}
          </div>
        )
      }
    }
  }

  export default EditorFullJournalistInfo;
