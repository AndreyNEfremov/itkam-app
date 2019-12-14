import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return <header className={classes.header}>
        <a href="/"><img src='https://image.winudf.com/v2/image1/Y29tLnJhaW4uY29hc3RfaWNvbl8xNTYyMzIwMTI4XzAxMA/icon.png?w=100&fakeurl=1' alt='logo'></img></a>
    </header>
};

export default Header;