import React from 'react';
import mic from '../../images/mic.png'
import Fab from '@mui/material/Fab';
import { pink } from '@mui/material/colors';
import './SpeechtoText.css'

const Pink = pink[500];

const Speechtotext = () => {
    return (
        <div className="mb-5">
            
            <Fab color={Pink} aria-label="SpeechIcon">
                <img className="speechIcon" src={mic} alt="" />
           
            </Fab>
            <h5 className="my-4 text-light">Please Command your buddy</h5>
        </div>
    );
};

export default Speechtotext;