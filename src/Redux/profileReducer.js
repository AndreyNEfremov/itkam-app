const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
        posts: [
            { id: 1, message: "Post One", likesCount: 12 },
            { id: 2, message: "Post Two", likesCount: 5 },
            { id: 3, message: "Post Three", likesCount: 4 },
            { id: 4, message: "Post Four", likesCount: 8 },
            { id: 5, message: "Post Five", likesCount: 2 },
            { id: 6, message: "Post User Six", likesCount: 3 }
        ],
        newPostText: ''
}

const profileReducer = (state = initialState, action) => {

    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
        }
        state.posts.push(newPost)
        state.newPostText = ''
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText
    }

    return state
};

export const addPostActionCreater = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreater = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;