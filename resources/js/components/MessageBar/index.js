import React from 'react';
import './index.scss';

const MessageBar = ({message, active}) => {
    {return message?
         (
            <div className="active message-bar">
            <h4>
            {message}
            </h4>
        </div>
    ):null;
}

};

export default MessageBar;