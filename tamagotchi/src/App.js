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

  updateData = (type, value, change) => {
    for (let i = 0; i < type.length; i++) {
      this.setState({ [type[i]]: value[i] - change[i] })
    }
  }

  render () {

    const hunger = this.state.hunger
    const health = this.state.health
    const fatigue = this.state.fatigue
    const thirst = this.state.thirst

    return (
      <div className="game">
        <span className="game-title">
          MiniGame
        </span>
        <div className="game-field">
          <div className="wrapper">
            <div className="stats">
              <Stat stat="Здоровье" value={health} />
              <Stat stat="Жажда" value={thirst} />
              <Stat stat="Голод" value={hunger} />
              <Stat stat="Усталость" value={fatigue} />
            </div>
            <div className="controls">
              <Button class="eat" text="ЕСТЬ"
                      values={ [hunger, health, fatigue] }
                      updateData={this.updateData}
              />
              <Button class="drink" text="ПИТЬ"
                      values={ [thirst, health, fatigue] }
                      updateData={this.updateData}
              />
              <Button class="sport" text="ЗАНЯТЬСЯ СПОРТОМ"
                      values={ [health, hunger, thirst, fatigue] }
                      updateData={this.updateData}
              />
              <Button class="work" text="РАБОТАТЬ"
                      values={ [thirst, hunger, fatigue, health] }
                      updateData={this.updateData}
              />
            </div>
          </div>
          <div>Hello, React!</div>
        </div>
      </div>
    );
  }
}

export default App;
