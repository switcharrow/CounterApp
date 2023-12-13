import React, { useState, useEffect } from 'react';

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    const updateCount = () => {
      setCount((prevCount) => prevCount + 1);
    };

    if (isRunning) {
      interval = setInterval(updateCount, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };
  const handleReset = () => {
    setCount((prevCount) => prevCount > 0 ? 0 : 0 ) 
  }

  return (
    <div className="container has-text-centered mt-6" style={{ background: '#f0f0f0', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="box">
        <h1 className="title">Counter App</h1>
        <p className="subtitle">Count: {count}</p>
        <div className="buttons">
          <button className="button is-primary" onClick={handleStart}>
            Mulai
          </button>
          <button className="button is-danger" onClick={handleStop}>
            Berhenti
          </button>
          <button className="button is-success" onClick={handleIncrement}>
            Tambah
          </button>
          <button className="button is-warning" onClick={handleDecrement}>
            Kurang
          </button>
          <button className='button is-dark' onClick={handleReset}> 
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterApp;
