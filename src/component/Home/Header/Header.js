import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar'
import MainHeader from '../MainHeader/MainHeader';
const Header = () => {
    return (
        <div className="header">
            <Navbar/>

            <MainHeader/>
        </div>
    );
};

export default Header;