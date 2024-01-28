import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import TuneIcon from '@mui/icons-material/Tune';
import logo from '../images/logo.png'
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>

            <div className="nav">
                <Link to='/'>
                <img src={logo} alt="logo" className='logo' />
                </Link>
                
                <div className="alert-adj">
                    <Link to='/notification'>
                    <IconButton>
                        <NotificationsIcon className='header_notification' fontSize='large' />
                    </IconButton>
                    </Link>
                    <Link to='/settings'>
                    <IconButton>
                        <TuneIcon className='header_tuneicon' fontSize='large' />
                    </IconButton>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header
