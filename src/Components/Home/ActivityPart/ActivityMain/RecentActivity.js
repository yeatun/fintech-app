import React from 'react';
import RecentActivityInfo from './RecentActivityInfo';
import person1 from '../../../../image/Ellipse 91.png';
import person2 from '../../../../image/Ellipse 90.png';
import person3 from '../../../../image/Ellipse 92.png';
import person4 from '../../../../image/Ellipse 91.png';

const infosData =[
    {
        title : 'Dollar Balance (primary)',
        to: 'Mr Mohan . mr@gmail.com',
        image: person1,
        balance:'$800000'
      
       
    },
    {
        title : 'Dollar Balance (primary)',
        to: 'Mr smith . 123tmr@gmail.com',
        image: person2,
        balance:'$200000'
    },
    {
        title : 'Dollar Balance (primary)',
        to: 'Mr rocky . mtr@gmail.com',
        image: person3,
        balance:'$400000'
    },
    {
        title : 'Dollar Balance (primary)',
        to: 'Mr Arnab . arnabr@gmail.com',
        image: person4,
        balance:'$100000'
    }
]
const RecentActivity = () => {
    return (
        <section className ='d-flex p-5'>
        <div className=" row">
            <h3 className=''>Recent Activity</h3>
            <p><b>today 15 january</b></p>
            <div   className='p-2 d-flex'>
                <button className='m-2 btn btn-dark'>Recent</button>
                <button className='m-2 btn btn-dark'>Pending</button>
            </div>
           
         {
             infosData.map(info => <RecentActivityInfo info={info}></RecentActivityInfo>)
         }
        </div>
     </section>
    );
};

export default RecentActivity;