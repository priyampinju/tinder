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
                <h4>New Matches</h4>
            </div>
            <h4 className='chats_messages'>Messages</h4>
            <div className="chats">
                <Chat name="Angel Priya"
                    message='Hi Pin'
                    timestamp='3 minutes ago'
                    profilePic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDYTPxn6uliNMLRejflfqqnqtrYi6WDEGCW6lCShU1jg&s'
                />
                <Chat name='Matha'
                    message='Oi !'
                    timestamp='2 hours ago'
                    profilePic='https://media.istockphoto.com/id/1197578214/photo/beautiful-young-woman.jpg?s=612x612&w=0&k=20&c=XdV1GLQalvNSXKsBv4C0vRDjPfiBOArH6BC_iCFtchg='
                />
                <Chat name='Ali'
                    message='Mashallah'
                    timestamp='5 hours ago'
                    profilePic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbJOdBLR_eNIfwt4-eoPsDZNhFXzoQkbPnuw&usqp=CAU'
                />
                <Chat name='Shizuka'
                    message='Konnichiwa'
                    timestamp='5 hours ago'
                    profilePic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbJOdBLR_eNIfwt4-eoPsDZNhFXzoQkbPnuw&usqp=CAU'
                />
                <Chat name='Khukhbu'
                    message='Hey Bro!'
                    timestamp='6 hours ago'
                    profilePic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbJOdBLR_eNIfwt4-eoPsDZNhFXzoQkbPnuw&usqp=CAU'
                />
                <Chat name='Munu'
                    message='Meaw'
                    timestamp='6 hours ago'
                    profilePic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbJOdBLR_eNIfwt4-eoPsDZNhFXzoQkbPnuw&usqp=CAU'
                />
            </div>


        </>
    )
}

export default Chats
