import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) //znachit props.profile raven null ili undefined, to est' net ego
        return <Preloader/>;
    // debugger
    return (
        <div>
            <div>
                <img className={classes.mainBg}
                     src='https://img2.goodfon.ru/original/1152x864/f/37/ozero-el-priroda.jpg' alt='bg'/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} alt='profile_photo'/>
                {/*<img className={classes.avatar}*/}
                {/*     src='https://i.pinimg.com/280x280_RS/d6/31/49/d631494cd031449e502584c96cb3b042.jpg'*/}
                {/*     alt='foto'/>*/}
                <p>My top account</p>
            </div>
        </div>
    )
};

export default ProfileInfo;