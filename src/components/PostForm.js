import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createPost} from '../actions/postAction';

export class PostForm extends Component {
    state = {
        title: "",
        body: ""
    }


    onFormInputChange = (e) => this.setState({[e.target.name]: e.target.value});

    
    onFormSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            title: this.state.title,
            body: this.state.body
        }

        this.props.createPost(newPost);

        this.setState({title: "", body: ""});
    }
    
  render() {

    return (
      <div>
          <h1>Add Post</h1>
          <form onSubmit={this.onFormSubmit}>
            <div>
                <label htmlFor="title">Title: </label>
                <input type="text" name="title" value={this.state.title}
                    onChange={this.onFormInputChange}/>
            </div>
            <br/>
            <div>
                <label htmlFor="body">Body: </label>
                <textarea name="body" value={this.state.body}
                    onChange={this.onFormInputChange}></textarea>
            </div>
            <input type="submit" value="Submit" />
          </form>
      </div>
    )
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
}

export default connect(null, {createPost})(PostForm);
