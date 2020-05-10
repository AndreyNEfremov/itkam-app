import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/Validate";
import {Textarea} from "../../Common/FormControl";



const MyPosts = (props) => {
    // debugger
    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    const onAddPost = (values) => {
        props.addPost(values.newPostText)
    };

    return (
        <div className={classes.postsBlock}>
            <div>
                <h3>My posts</h3>
            </div>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
};

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPostText'} component={Textarea} placeholder={'Post message'}
                       validate={[requiredField, maxLength10]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;