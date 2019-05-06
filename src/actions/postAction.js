import axios from 'axios';
import {FETCH_POSTS, NEW_POST} from './types';

//another syntax:
// export const fetchPosts = () => dispatch => { axios. ...

export function fetchPosts() {
    return function(dispatch) {
        // variant 1 with vanilla fetch api
    // fetch("http://jsonplaceholder.typicode.com/posts?_limit=10")
    //     .then(res => res.json())
    //     .then(data => this.setState({posts: data}));
    // variant 2 with axios package
    // axios.get("http://jsonplaceholder.typicode.com/posts?_limit=10")
    // .then(res => this.setState({posts: res.data}));

    axios.get("http://jsonplaceholder.typicode.com/posts?_limit=10")
    .then(res => res.data) // list of posts
    .then(posts => dispatch({
        type: FETCH_POSTS,
        payload: posts
    }));
    }
}


export function createPost(post) {
    return function(dispatch) {
        axios.post("http://jsonplaceholder.typicode.com/posts", post)
            .then(res => res.data) // created post
            .then(post => dispatch({
                type: NEW_POST,
                payload: post
            }));
    }
}