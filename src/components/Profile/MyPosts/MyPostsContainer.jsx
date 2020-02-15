import React from 'react';
import { addPostActionCreater, updateNewPostTextActionCreater } from '../../../Redux/profileReducer';
import MyPosts from "./MyPosts";
import StoreContext from '../../../StoreContext';

const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                const addPost = () => {
                    store.dispatch(addPostActionCreater())
                }
                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreater(text)
                    store.dispatch(action)
                }
                return <MyPosts updateNewPostText={onPostChange}
                    addpost={addPost}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText} />
            }
            }
        </StoreContext.Consumer>
    )
};

export default MyPostsContainer;