import React from 'react';
import './inputStatus.scss';

const InputStatus = ({status}) => {
    return (
        <div className="status-container">
            <div className={`${status===null?"status-unset":status==="error"?"status-error":status==="pending"?"status-pending":status==="success"&&"status-valid"}`}></div>
        </div>
    );
};

export default InputStatus;