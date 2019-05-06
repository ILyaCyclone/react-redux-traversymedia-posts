import React, { Component } from 'react'
import axios from 'axios';

export class Posts extends Component {
    state = {
        posts: []
    }

componentDidMount() {
    // variant 1 with vanilla fetch api
    // fetch("http://jsonplaceholder.typicode.com/posts?_limit=10")
    //     .then(res => res.json())
    //     .then(data => this.setState({posts: data}));
    // variant 2 with axios package
    axios.get("http://jsonplaceholder.typicode.com/posts?_limit=10")
        .then(res => this.setState({posts: res.data}));
}

  render() {
      const postItems = this.state.posts.map(post =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
        )
    return (
      <div>
        <h1>Posts</h1>
        <div>
            {postItems}
        </div>
      </div>
    )
  }
}

export default Posts
