import React from 'react';
import './App.scss';
import Button from './components/controls/Button.jsx'
import Stat from './components/stats/stats.jsx'

class App extends React.Component {

  state = {
    health: 75,
    thirst: 75,
    hunger: 75,
    fatigue: 75
  }

  updateData = (value1, value2, value3) => {
    this.setState({ hunger: value1})
    this.setState({ health: value2})
    this.setState({ fatigue: value3 })
  }

  render () {
  return (
    <div className="App">
      <div className="game">
        <span className="game-title">
          MiniGame
        </span>
        <div className="game-field">
          <div className="wrapper">
            <div className="stats">
              <Stat stat="Здоровье" value={this.state.health} />
              <Stat stat="Жажда" value={this.state.thirst} />
              <Stat stat="Голод" value={this.state.hunger} />
              <Stat stat="Усталость" value={this.state.fatigue} />
            </div>
            <div className="controls">
              <Button class="eat" text="ЕСТЬ"
                      value1={this.state.hunger}
                      value2={this.state.health}
                      value3={this.state.fatigue}
                      updateData={this.updateData} />
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
}

export default App;
