import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ActionInfo.css'

const ActionInfo = ({info}) => {
    return (
        <div className="col-md-6 p-3 text-white action-info-card">
           <div className={`justify-content-center action-info-container info-${info.background}`}>
           <div className ="text-center" >
                <FontAwesomeIcon className ="info-icon" icon={info.icon}></FontAwesomeIcon>
            </div>
            <div  className =" text-center" >
                <h4>{info.title}</h4>
             
            </div>
           </div>

        </div>
    );
};

export default ActionInfo;