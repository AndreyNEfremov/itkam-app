import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {

    let posts = [
        { id: 1, message: "Post One", likesCount: 12 },
        { id: 2, message: "Post Two", likesCount: 5 },
        { id: 3, message: "Post Three", likesCount: 4 },
        { id: 4, message: "Post Four", likesCount: 8 },
        { id: 5, message: "Post Five", likesCount: 2 },
        { id: 6, message: "Post User Six", likesCount: 3 }
    ];

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={posts} />
        </div>
    )
};

export default Profile;