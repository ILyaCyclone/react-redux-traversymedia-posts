import axios from 'axios';
import {FETCH_POSTS, NEW_POST} from './types';

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
    .then(res => res.data)
    .then(posts => dispatch({
        type: FETCH_POSTS,
        payload: posts
    }));
    }

}