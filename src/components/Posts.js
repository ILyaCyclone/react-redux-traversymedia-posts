import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postAction';

export class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  // this code is moved to postReducer NEW_POST
  // componentWillReceiveProps(nextProps) {
  //     if(nextProps.lastAddedItem) {
  //       // add new post to beginning of posts array
  //       this.props.posts.unshift(nextProps.newPost);
  //     }
  // }

  render() {
      const postItems = this.props.posts.map(post =>
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


const mapStateToProps = state => ({
  posts: state.posts.items // state.posts is a reducer defined in reducers/root.js
  // , lastAddedItem: state.posts.lastAddedItem
})


Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
  // , lastAddedItem: PropTypes.object.isRequired
}

export default connect(mapStateToProps, {fetchPosts})(Posts);