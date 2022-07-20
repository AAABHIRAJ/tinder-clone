import React from 'react';
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';


function Header() {
  return (
    <div className='header'>
        <IconButton>
            <PersonIcon font-size="large" className='header__icon'/>
        </IconButton>
        

        <img src='/images/tinder-logo.png'
         alt='Tinder Logo' className='header__logo'/>

        <IconButton>
            <ForumIcon font-size="large" className='header__icon'/>
        </IconButton>

    </div>
  )
}

export default Header