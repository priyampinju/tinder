import React from 'react'
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <>
            <div className="footer">
                <Link to="/">
                    <IconButton className="footer_tinder">
                        <AcUnitRoundedIcon fontSize='large' />
                    </IconButton>
                </Link>
                <Link to="/explore">
                    <IconButton className="footer_explore">
                        <AppRegistrationRoundedIcon fontSize='large' />
                    </IconButton>
                </Link>
                <Link to="/likes">
                    <IconButton className="footer_liked">
                        <AutoAwesomeRoundedIcon fontSize='large' />
                    </IconButton>
                </Link>
                <Link to='/chat'>
                    <IconButton className="footer_message">
                        <ForumRoundedIcon fontSize='large' />
                    </IconButton>
                </Link>
                <Link to='/user'>
                    <IconButton className="user">
                        <PersonRoundedIcon fontSize='large' />
                    </IconButton>
                </Link>
            </div>
        </>
    )
}

export default Footer
