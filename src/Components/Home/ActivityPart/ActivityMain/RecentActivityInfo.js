import React from 'react';

const RecentActivityInfo = ({info}) => {
    return (
        <div>
          
            
           <div style={{borderTop:'1px solid gray',borderBottom:'1px solid gray'}} className={`d-flex `}>
        
            <div>
            <img className="img-fluid  p-2" style={{width:'80px'}} src={info.image} alt="" />
            </div>
            <div className ="p-3" >
          
           <p6 ><b>{info.title}</b></p6>
           <br/>
               <small>{info.to}</small>
            </div>
            <div style={{paddingLeft:'150px'}}>
                <h5 className ="">{info.balance}</h5>
                <button className='btn btn-dark'>approved</button>
            </div>
           </div>

        </div>
    );
};

export default RecentActivityInfo;