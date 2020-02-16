// import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreater, updateNewPostTextActionCreater } from '../../../Redux/profileReducer';
import MyPosts from "./MyPosts";

// const MyPostsContainer = () => {

//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();
//                 const addPost = () => {
//                     store.dispatch(addPostActionCreater())
//                 }
//                 let onPostChange = (text) => {
//                     let action = updateNewPostTextActionCreater(text)
//                     store.dispatch(action)
//                 }
//                 return <MyPosts updateNewPostText={onPostChange}
//                     addpost={addPost}
//                     posts={state.profilePage.posts}
//                     newPostText={state.profilePage.newPostText} />
//             }
//             }
//         </StoreContext.Consumer>
//     )
// };

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreater())
        },
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreater(text)
            dispatch(action)
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;