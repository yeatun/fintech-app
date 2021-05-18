import React from 'react';
import appleStore from '../../../image/apple.png';
import playStore from '../../../image/play store.png';
import bank from '../../../image/bank.jpg';
import './GetLink.css'
const GetLink = () => {
    return (
        <section className ='d-flex container get-link my-5 py-5 '>
            <div className='col-md-6 text-center'>
                <h5 className='pt-5'>Get Fintech App</h5>
                <p>Available on</p>
                <div><a href="https://www.apple.com/app-store/"><img className="store img-fluid about-img"  src={appleStore} alt="" /></a>

                <a href="https://play.google.com/store/apps/details?id=com.nianticproject.ingress"> <img className=" img-fluid store about-img p-2"  src={playStore} alt="" /></a>
                </div>
                </div>
            <div className='col-md-6 text-center'>
            <img className="bank img-fluid about-img"  src={bank} alt="" />
            </div>
        </section>
    );
};

export default GetLink;