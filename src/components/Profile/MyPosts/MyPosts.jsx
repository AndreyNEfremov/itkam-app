import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    // let posts = [
    //     { id: 1, message: "Post One", likesCount: 12 },
    //     { id: 2, message: "Post Two", likesCount: 5 },
    //     { id: 3, message: "Post Three", likesCount: 4 },
    //     { id: 4, message: "Post Four", likesCount: 8 },
    //     { id: 5, message: "Post Five", likesCount: 2 },
    //     { id: 6, message: "Post User Six", likesCount: 3 }
    // ];

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    const newPostElement = React.createRef();

    const addPost = () => {
        let text = newPostElement.current.value;
        alert(text)
    };

    return (
        <div className={classes.postsBlock}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <div>
                    <textarea ref={newPostElement} name="" id="" cols="100" rows="3"></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={classes.posts}>
                {/* <Post message={postData[0].message} likesCount={postData[0].likesCount} />
                <Post message={postData[1].message} likesCount={postData[1].likesCount} />
                <Post message={postData[2].message} likesCount={postData[2].likesCount} /> */}
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;