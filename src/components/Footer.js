import React from 'react'
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';
import { IconButton } from '@mui/material';


const Footer = () => {
    return (
        <>
            <div className="footer">
                <IconButton className="footer_tinder">
                    <AcUnitRoundedIcon fontSize='large' />
                </IconButton>
                <IconButton className="footer_explore">
                    <AppRegistrationRoundedIcon fontSize='large' />
                </IconButton>
                <IconButton className="footer_liked">
                    <AutoAwesomeRoundedIcon fontSize='large' />
                </IconButton>
                <IconButton className="footer_message">
                    <ForumRoundedIcon fontSize='large' />
                </IconButton>
                <IconButton className="user">
                    <PersonRoundedIcon fontSize='large' />
                </IconButton>
            </div>
        </>
    )
}

export default Footer
