import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';
import iphoneNot from '../sound/Iphone.mp3';

import Message from './message/Message';

import './messages.css';

const Messages = ({ messages, name }) => (
    <ScrollToBottom className="messages">
        {messages.map((message, i) => <div key={i}><Message message={message} name={name} />
            {
                message && (
                    <audio
                        autoPlay="autoPlay"
                        href="audio_tag"

                        src={iphoneNot}
                        type="audio/mpeg"
                        hidden
                    ></audio>
                )
            }
        </div>)}
    </ScrollToBottom>
);

export default Messages;