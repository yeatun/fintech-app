import React from 'react';
import { faMoneyCheckAlt,faWallet, faMoneyCheck,faReceipt } from '@fortawesome/free-solid-svg-icons'
import ActionInfo from './ActionInfo';

const infosData =[
    {
        title : 'Pay',
        icon: faMoneyCheckAlt,
        background:'blue',
       
    },
    {
        title : 'Request',
        icon: faWallet,
        background:'blue',
    },
    {
        title : 'Top Up',
        icon: faReceipt,
        background:'blue',
    },
    {
        title : 'Withdrew',
        icon: faMoneyCheck,
        background:'yellow',
    }
]
const Action = () => {
    return (
        <section className ='d-flex justify-content-center'>
        <div className=" row">
            <h3>Action</h3>
        {
             infosData.map(info => <ActionInfo info={info}></ActionInfo>)
         }
        </div>
     </section>
    );
};

export default Action;