import React from 'react';
import ReactDOM from 'react-dom/client';
import topBlobs from './images/blobs.png'
import BottomBlobs from './images/purpleBlobs.png'
export default function Hello(props){
    return(
        <div className='Hello'>
  
            <div className='HelloInfo'>
            <h1>Quizzical</h1>
            <p>some info if needed</p>
            <button onClick={props.onClick}>Start quiz</button>
            </div>
        </div>
    )
}