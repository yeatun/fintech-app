import React from 'react';
import InfoCard from './InfoCard';
import qrCode from '../../../image/qrcode.png';
import money from '../../../image/money.jpg';



const infosData =[
    {
        title : 'Dollar Balance',
        money: '$2780,00',
        paragraph:'Available blance ',
        background:'primary',
        image:qrCode
    },
    {
        title : 'My Dollar',
        money: '$2780,00',
        QRCode: "",
        background:'primary',
        paragraph:'Available blance ',
        image:qrCode
    },
    {
        title : 'Add Balance',
        background:'primary',
        
        image:money
    }
]

const WalletInfo = () => {

    return (
        
        <section className ='d-flex justify-content-center'>
            
        <div className=" row">
        <div className='pt-5 pb-5 text-center text-white'>
        <h3 >Wallet </h3>
            <h5>Dashboard</h5>
        </div>
        
        {
             infosData.map(info => <InfoCard info={info}></InfoCard>)
         }
        </div>
     </section>
    );
};

export default WalletInfo;