import React from 'react';
import { image } from '../../constants';
import './Header.css';

const Header = () => (
    <div className='app__header' id='home'>
    <img src={image.bg} alt="Background Image"/>
    </div>
);

export default Header;