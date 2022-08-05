import React,{useContext, useEffect,useState} from 'react';
import mic from '../../images/mic.png'
import Fab from '@mui/material/Fab';
import { pink } from '@mui/material/colors';
import './SpeechtoText.css'

import useSpeechToText from 'react-hook-speech-to-text';
import alanBtn from "@alan-ai/alan-sdk-web";
import axios from 'axios';
import rootContext from '../../context/rootContext';

const Pink = pink[500];

const Speechtotext = () => {
    const {setMusic,setNews,setSearch,setAppState,music,news,state}=useContext(rootContext);
    // const {
    //     error,
    //     interimResult,
    //     isRecording,
    //     results,
    //     startSpeechToText,
    //     stopSpeechToText,
    // } = useSpeechToText({
    //     continuous: true,
    //     useLegacyResults: false
    // });

    const [speech,setSpeech]=useState('')

console.log(`music ${music} , News ${news} , state ${state}`)
    const getMusicData=async(data)=>{
        const res=await axios.post('/api/music/artist/',{type:data})
            .then(res=>setMusic(res.data))
    }
    const getTrackData=async(data)=>{
        const res=await axios.post('/api/music/track/',{type:data})
            .then(res=>setMusic(res.data.videos))
    }
    const getGenreData=async(data)=>{
        const res=await axios.post('/api/music/genre/',{type:data})
            .then(res=>setMusic(res.data.videos))
    }

    const getNews=async()=>{
        const res=await axios.get('/api/news/letest-news/')
            .then(res=>setNews(res.data.articles))
    }

    const getSearchResults=async(keyword)=>{
        const res=await axios.post('/api/news/letest-news/',{keyword:keyword})
            .then(res=>setSearch(res.data.videos))
    }

    const getroutePlanning=async(sou,des)=>{
        
        navigator.geolocation.getCurrentPosition(async(position) => {

        await axios({
            method: 'GET',
            url:`https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf6248c53152a7fbfe4a74b8335837d2bc6e7a&start=${position.coords.latitude},${position.coords.latitude}&end=8.687872,49.420318`,
            headers: {
              'Accept': 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8'
            }}, function (error, response, body) {
            console.log('Status:', response.statusCode);
            console.log('Headers:', JSON.stringify(response.headers));
            console.log('Response:', body)})
        })
    }

    

    
useEffect(() => {
    alanBtn({
      key: '0e8ca716abe3d9410a33d16502ee9e0f2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({command,data}) => {
        setSpeech(command+" "+data)
        if (command === 'play music') {
            alert("Play Music")
            
        }
        if(command==="musicvideosartist"){
            setAppState(1.1)
            getMusicData(data)
        }
        if(command==="musicvideostrack"){
            setAppState(1.2)
            getTrackData(data)
        }
        if(command==="musicvideosgenre"){
            setAppState(1.3)
            getGenreData(data)
        }
        if(command==="shownews"){
            setAppState(1.4)
            getNews()
        }
        if(command==='search'){
            setAppState(1.5)
            getSearchResults(data)
        }
        if(command==='planning'){
            setAppState(1.6)
            getroutePlanning(data.s,data.d)
        }

    },
    top:'50%',
    left:'50%',
    
    });
  }, []);


    return (
        <div className="mb-5">
            <div class="alan-btn extra_margin text-light">Hi I am Buddy. Please talk .....</div>
            {/* <Fab color={Pink} aria-label="SpeechIcon" onClick={isRecording ? stopSpeechToText : startSpeechToText}>
                <img className="speechIcon" src={mic} alt="" />
                {isRecording ? 'Stop Recording' : 'Start Recording'}
            </Fab>
            <h5 className="my-4 text-light">Please Command your buddy</h5>
            <h1>Recording: {isRecording.toString()}</h1>
            <ul>
                {results.map((result) => (
                    <li key={result.timestamp}>{result.transcript}</li>
                ))}
                {interimResult && <li>{interimResult}</li>}
            </ul> */}
            {speech}
        </div>
    );
};

export default Speechtotext;