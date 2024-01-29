import React from 'react'
import Avatar from '@mui/material/Avatar';

const Chat = ({ name, message, timestamp, profilePic }) => {
    return (
        <>
            <div className="chat">
                <Avatar className="chat_image" alt={name} src={profilePic}></Avatar>
                <div className='chat_details'>
                    <h3>{name}</h3>
                    <p>
                        {message}</p>
                </div>
                <p className='chat_time'>
                    {timestamp}</p>
            </div>
        </>
    )
}

export default Chat
