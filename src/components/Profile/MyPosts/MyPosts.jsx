import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return <div>
        <div>
            My posts
        </div>
        <div>
            <textarea name="" id="" cols="100" rows="3"></textarea>
            <button>Add post</button>
            <button>Remove</button>
        </div>
        <div className={classes.posts}>
            <Post message='1st post publishing' likesCount='  2  '/>
            <Post message='2nd post here already' likesCount='  9  '/>
        </div>
    </div>
};

export default MyPosts;