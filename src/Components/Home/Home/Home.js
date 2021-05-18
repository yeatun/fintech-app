import React from 'react';
import ActivityPart from '../ActivityPart/ActivityPart';
import Footer from '../Footer/Footer';
import GetLink from '../GetLink/GetLink';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div className="container-fluid">
           <Header></Header>
           <ActivityPart></ActivityPart>
           <GetLink></GetLink>
           <Footer></Footer>
        </div>
    );
};

export default Home;