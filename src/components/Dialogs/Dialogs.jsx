import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.usersDialogs}>
                <div className={classes.userNameDialog + ' ' + classes.active}>
                    <NavLink to='dialogs/1'>User One</NavLink>
                </div>
                <div className={classes.userNameDialog}>
                    <NavLink to='dialogs/2'>User Two</NavLink>
                </div>
                <div className={classes.userNameDialog}>
                    <NavLink to='dialogs/3'>User Three</NavLink>
                </div>
                <div className={classes.userNameDialog}>
                    <NavLink to='dialogs/4'>User Four</NavLink>
                </div>
                <div className={classes.userNameDialog}>
                    <NavLink to='dialogs/5'>User Five</NavLink>
                </div>
                <div className={classes.userNameDialog}>
                    <NavLink to='dialogs/6'>User Six</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Lorem ipsum dolor sit amet.</div>
                <div className={classes.message}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, fugit.</div>
                <div className={classes.message}>Lorem, ipsum dolor.</div>
                <div className={classes.message}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus repudiandae laudantium adipisci laborum accusantium odit sequi, culpa quibusdam.</div>
                <div className={classes.message}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            </div>
        </div>
    )
};

export default Dialogs;