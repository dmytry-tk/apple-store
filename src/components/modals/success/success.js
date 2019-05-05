import React from 'react';
import "./success.sass"

const Success = ({desc=""}) => {
    return(
        <div className="success-modal">
            <div className="success-icon"><i className="far fa-check-circle"></i></div>
            <div className="success-text">{desc}</div>
        </div>
    )
}

export default Success;