import React from 'react';

const Header = (title) => {
    return(
        <>

        <header class="header">
            <h1 class="header__title">{title}</h1>
        </header>

        </>
    );
}

export default Header;