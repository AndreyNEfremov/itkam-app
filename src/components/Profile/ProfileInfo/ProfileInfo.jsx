import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
            <img className={classes.mainBg} src='https://img2.goodfon.ru/original/1152x864/f/37/ozero-el-priroda.jpg' alt='bg'></img>
            </div>
            <div className={classes.descriptionBlock}>
                <img className={classes.avatar} src='https://i.pinimg.com/280x280_RS/d6/31/49/d631494cd031449e502584c96cb3b042.jpg' alt='foto'></img> + description
            </div>
        </div>
    )
};

export default ProfileInfo;