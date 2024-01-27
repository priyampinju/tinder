import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import TuneIcon from '@mui/icons-material/Tune';
import logo from '../images/logo.png'
import { IconButton } from '@mui/material';

const Header = () => {
    return (
        <>

            <div className="nav">
                <img src={logo} alt="logo" className='logo' />
                <div className="alert-adj">
                    <IconButton>
                        <NotificationsIcon className='header_notification' fontSize='large' />
                    </IconButton>
                    <IconButton>
                        <TuneIcon className='header_tuneicon' fontSize='large' />
                    </IconButton>
                </div>
            </div>
        </>
    )
}

export default Header
