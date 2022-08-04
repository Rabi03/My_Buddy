import React from 'react';
import CarouCompo from '../CarouCompo/CarouCompo';
import MusicSlide from '../MusicSlide/MusicSlide';
import NavCompo from '../NavCompo/NavCompo';
import Speechtotext from '../Speechtotext/Speechtotext';
import './Homepage.css'

const Homepage = () => {
    return (
        <div>
            <NavCompo></NavCompo>
            <CarouCompo></CarouCompo>
            <Speechtotext></Speechtotext>
            <MusicSlide></MusicSlide>
        </div>
    );
};

export default Homepage;