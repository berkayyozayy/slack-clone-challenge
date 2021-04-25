import React, { useState, useEffect } from 'react'
import './Chat.css'
import { useParams } from 'react-router-dom'

import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import db from '../db/firebase'
import Messages from './Messages';

function Chat() {
    const { roomId } = useParams()
    const [roomDetails, setRoomDetails] = useState(null)
    const [roomMessages, setRoomMessages] = useState([])

    useEffect(() => {
        if (roomId) {
            db.collection('rooms')
                .doc(roomId)
                .onSnapshot((snapshot) => {
                    setRoomDetails(snapshot.data())
                })
        }

        db.collection('rooms').doc(roomId)
            .collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot((snapshot) =>
                setRoomMessages(
                    snapshot.docs.map(doc => doc.data())
                )
            )
    }, [roomId])

    // console.log('Messages --->>>', roomMessages)
    return (
        <div className='chat'>
            <h2>You are in {roomId} room</h2>
            <div className='chat__header'>
                <div className='chat__headerLeft'>
                    <div className='chat__channelName'>
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderOutlinedIcon />
                    </div>
                </div>
                <div className='chat__headerRight'>
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>

            <div className='chat__messages'>
                {roomMessages.map(message => (
                    <Messages
                        message={message.message}
                        timestamp={message.timestamp}
                        user={message.user}
                        userImage={message.userImage}
                    />
                ))}

            </div>
        </div>
    )
}

export default Chat
