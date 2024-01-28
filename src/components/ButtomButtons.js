import React from 'react'
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import { IconButton } from '@mui/material';

const ButtomButtons = () => {
    return (
        <>
            <div className="swipeButtons">
                <IconButton className='swipeButton_repeat'>
                    <ReplayOutlinedIcon fontSize='large' />
                </IconButton>
                <IconButton className='swipeButton_left'>
                    <CloseOutlinedIcon fontSize='large' />
                </IconButton>
                <IconButton className='swipeButton_star'>
                    <StarPurple500OutlinedIcon fontSize='large' />
                </IconButton>
                <IconButton className='swipeButton_right'>
                    <FavoriteOutlinedIcon fontSize='large' />
                </IconButton>
                <IconButton className='swipeButton_bolt'>

                    <BoltOutlinedIcon fontSize='large' />
                </IconButton>
            </div>
        </>
    )
}

export default ButtomButtons
