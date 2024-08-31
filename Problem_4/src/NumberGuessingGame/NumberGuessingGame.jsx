import React, { useState } from 'react';
import './NumberGuessingGame.css';

const NumberGuessingGame = () => {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [targetNumber, setTargetNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [chances, setChances] = useState(5);
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const handleSubmit = (event) => {
    event.preventDefault();
    const numberGuess = parseInt(guess, 10);

    if (chances <= 0) {
      setMessage('Game Over! You have no more chances.');
      setMessageType('error');
      return;
    }
    
    if (numberGuess === targetNumber) {
      setMessage('Congratulations! You guessed it right!');
      setMessageType('success');
    } else if (numberGuess < targetNumber) {
      setMessage('Too low! Try again.');
      setMessageType('error');
    } else {
      setMessage('Too high! Try again.');
      setMessageType('error');
    }
    
    setChances(chances - 1);
    setGuess('');
  };

  return (
    <div className="app-container">
      <div className="game-container">
        <h1 className="title">Guess the Number</h1>
        <p className="chances-text">You have {chances} {chances === 1 ? 'chance' : 'chances'} left.</p>
        <form onSubmit={handleSubmit} className="game-form">
          <input
            type="number"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            className="guess-input"
            placeholder="Enter your guess"
          />
          <button type="submit" className="submit-button">Submit</button>
        </form>
        {message && (
          <p className={`message ${messageType}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default NumberGuessingGame;
