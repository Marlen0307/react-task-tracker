import React from 'react';
import Button from './Button.js';

const Header = ({title}) => {
    return (
        <header className='header'>
            <h1>
                {title}
            </h1>
            <Button color={'green'} text={'Add Tasks'} />
        </header>

    );
};

export default Header;