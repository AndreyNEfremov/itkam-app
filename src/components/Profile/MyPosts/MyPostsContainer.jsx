// import React from 'react';
import { connect } from 'react-redux';
import { addPostAC, updateNewPostTextAC } from '../../../Redux/profileReducer';
import MyPosts from "./MyPosts";

// const MyPostsContainer = () => {

//     return (
//         <StoreContext.Consumer>
//             {(old_Store) => {
//                 let state = old_Store.getState();
//                 const addPost = () => {
//                     old_Store.dispatch(addPostActionCreater())
//                 }
//                 let onPostChange = (text) => {
//                     let action = updateNewPostTextActionCreater(text)
//                     old_Store.dispatch(action)
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
            dispatch(addPostAC())
        },
        updateNewPostText: (text) => {
            let action = updateNewPostTextAC(text)
            dispatch(action)
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;