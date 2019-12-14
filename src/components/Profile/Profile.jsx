import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return <div>
        <div>
            <img src='https://img2.goodfon.ru/original/1152x864/f/37/ozero-el-priroda.jpg' alt='bg'></img>
        </div>
        <div>
            <img src='https://i.pinimg.com/280x280_RS/d6/31/49/d631494cd031449e502584c96cb3b042.jpg' alt='foto'></img> + description
        </div>
        <MyPosts />
    </div>
};

export default Profile;