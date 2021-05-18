import React from 'react';

import Navbar from '../Navbar/Navbar';
import WalletInfo from '../WalletInfo/WalletInfo';
import './Header.css'

const Header = () => {
    return (
        <div className='backgroundColor'>
            <Navbar></Navbar>
            <WalletInfo></WalletInfo>
           
        </div>
    );
};

export default Header;