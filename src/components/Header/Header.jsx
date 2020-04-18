import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return <header className={classes.header}>
        <a href="/"><img src='https://image.winudf.com/v2/image1/Y29tLnJhaW4uY29hc3RfaWNvbl8xNTYyMzIwMTI4XzAxMA/icon.png?w=100&fakeurl=1' alt='logo' /></a>
        <div className={classes.loginBlock}>
            {props.isAuth ? props.login
            : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
};

export default Header;