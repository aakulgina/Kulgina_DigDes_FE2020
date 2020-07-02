import React from 'react';
import './App.scss';
import Button from './components/controls/button.js'

function App() {
  return (
    <div className="App">
      <div className="game">
        <span className="game-title">
          MiniGame
        </span>
        <div className="game-field">
          <div className="wrapper">
            <div className="controls">
              <Button class="eat" text="ЕСТЬ" />
              <Button class="drink" text="ПИТЬ" />
              <Button class="sport" text="ЗАНЯТЬСЯ СПОРТОМ" />
              <Button class="work" text="РАБОТАТЬ" />
            </div>
          </div>
          <div>Hello, React!</div>
        </div>
      </div>
    </div>
  );
}

export default App;
