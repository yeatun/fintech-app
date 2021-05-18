import React from 'react';
import './InfoCard.css'
const InfoCard = ({info}) => {
    return (
        <div className="col-md-4 info-card p-5">
            
           <div className={`d-flex  justify-content-center info-container info-${info.background}`}>
           <div className ="me-3 p-2" >
           <h6>{info.title}</h6>
           <small>{info.paragraph}</small>
           <br/>
               <h6>{info.money}</h6>
            </div>
            <div>
            <img className="qrCode img-fluid about-img"  src={info.image} alt="" />
            </div>
           </div>

        </div>
    );
};

export default InfoCard;