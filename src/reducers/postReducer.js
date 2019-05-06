import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    items: [],
    lastAddedItem: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }

        case NEW_POST:
            const createdPost = action.payload;
            return {
                ...state,
                items: [createdPost, ...state.items], // add createdPost to posts
                lastAddedItem: createdPost
            }
        default:
            return state;
    }
}