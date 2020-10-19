import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) //znachit props.profile raven null ili undefined, to est' net ego
        return <Preloader/>;
    return (
        <div>
            <div>
                <img className={classes.mainBg}
                     src='https://img2.goodfon.ru/original/1152x864/f/37/ozero-el-priroda.jpg' alt='bg'/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large || 'https://avavatar.ru/images/avatars/1/avatar_oC4jAgN51kPE3NGP.jpg'} alt='profile_photo'/>
                <p><b>{props.profile.fullName}</b> account</p>
                <div>Статус:  <ProfileStatusWithHooks status={props.status} updateStatusTC={props.updateStatusTC}/></div>
                <br/>
                <div>Обо мне: {props.profile.aboutMe}</div>
                <div>Ищу работу: {props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    )
};

export default ProfileInfo;