import React,{useContext} from 'react';
import CarouCompo from '../CarouCompo/CarouCompo';
import MusicSlide from '../MusicSlide/MusicSlide';
import NavCompo from '../NavCompo/NavCompo';
import NewsCompo from '../NewsCompo/NewsCompo';
import Speechtotext from '../Speechtotext/Speechtotext';
import './Homepage.css'
import RootContext from '../../context/rootContext';

const Homepage = () => {
    const {state,music,news}=useContext(RootContext)
    const getComponent=()=>{
        switch(state){
            case 1.1:
                return <MusicSlide music={music}></MusicSlide>
            case 1.2:
                return <NewsCompo news={news}></NewsCompo>
        }
    }
    return (
        <div>
            <NavCompo></NavCompo>
            <CarouCompo></CarouCompo>
            <Speechtotext></Speechtotext>
            {getComponent}
            <MusicSlide music={music}></MusicSlide>
        </div>
    );
};

export default Homepage;