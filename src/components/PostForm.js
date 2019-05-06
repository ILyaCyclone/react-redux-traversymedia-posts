import React, { Component } from 'react'

export class PostForm extends Component {
    state = {
        title: "",
        body: ""
    }


    onFormInputChange = (e) => this.setState({[e.target.name]: e.target.value});

    
  render() {

    return (
      <div>
          <h1>Add Post</h1>
          <form>
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

export default PostForm;
