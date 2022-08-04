import React from 'react';
import mic from '../../images/mic.png'
import Fab from '@mui/material/Fab';
import { pink } from '@mui/material/colors';
import './SpeechtoText.css'

import useSpeechToText from 'react-hook-speech-to-text';

const Pink = pink[500];

const Speechtotext = () => {
    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
    } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
    });

    if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>

    return (
        <div className="mb-5">

            <Fab color={Pink} aria-label="SpeechIcon" onClick={isRecording ? stopSpeechToText : startSpeechToText}>
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
            </ul>
        </div>
    );
};

export default Speechtotext;