import React, { useState, useEffect } from 'react'
import './Chat.css'
import { useParams } from 'react-router-dom'

import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import db from '../db/firebase'

function Chat() {
    const { roomId } = useParams()
    const [roomDetails, setRoomDetails] = useState(null)

    useEffect(() => {
        if (roomId) {
            db.collection('rooms')
                .doc(roomId)
                .onSnapshot((snapshot) => {
                    setRoomDetails(snapshot.data())
                })
        }
    }, [roomId])

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
        </div>
    )
}

export default Chat
