import React from 'react';
import classes from './Post.module.css';
// import { checkPropTypes } from 'prop-types';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://pp.userapi.com/c840323/v840323270/6e89a/JjC3BSfLuqE.jpg?ava=1" alt="" />
            {props.message}
            <div>
                <span>Like!</span> {props.likesCount}
            </div>
        </div>
    )
};

export default Post; 