// import React from 'react';
import React, { useState } from 'react';

import  { useEffect } from 'react'
import './App.css';



function App() {
  const [isRunning , setIsRunning]= useState(false)
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const startStopwatch = () => {
    setIsRunning(!isRunning);
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {formatTime()}</p>
      <button onClick={startStopwatch}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={resetStopwatch}>Reset</button>
    </div>
  );
};

export default App;
