import React from 'react';
import Chat from './chat.js';
import SearchIcon from '@mui/icons-material/Search';

const Chats = () => {
    return (
        <>
            <div className="search">
                <SearchIcon />
                <p>Search 172 Matches</p>
            </div>
            <div className="new_matches">
                Corousel
            </div>
            <h3>Messages</h3>
            <div className="chats">
                <Chat name="Priya"
                    message='Hi Pin'
                    timestamp='3 minutes ago'
                    profilePic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDYTPxn6uliNMLRejflfqqnqtrYi6WDEGCW6lCShU1jg&s'
                />
                <Chat name='Hema'
                    message='Oi !'
                    timestamp='2 hours ago'
                    profilePic='https://media.istockphoto.com/id/1197578214/photo/beautiful-young-woman.jpg?s=612x612&w=0&k=20&c=XdV1GLQalvNSXKsBv4C0vRDjPfiBOArH6BC_iCFtchg='
                />
            </div>


        </>
    )
}

export default Chats
