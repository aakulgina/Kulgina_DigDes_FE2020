import React from 'react';
import './App.scss';
import './media.scss';
import Button from './components/controls/Button.jsx'
import Stat from './components/stats/stats.jsx'
import Input from './components/input/input.jsx'

class App extends React.Component {

  state = {
    health: 50,
    thirst: 50,
    hunger: 50,
    fatigue: 50
  }

  updateData = (type, value, change) => {
    for (let i = 0; i < type.length; i++) {
      if (value[i] - change[i] <= 0) {
        this.setState({ [type[i]]: 0 })  
      } else if (value[i] - change[i] >= 100) {
        this.setState({ [type[i]]: 100 })
      } else {
        this.setState({ [type[i]]: value[i] - change[i] })
      }
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
              <Stat class="health" stat="Здоровье" value={health} />
              <Stat class="thirst" stat="Жажда" value={thirst} />
              <Stat class="hunger" stat="Голод" value={hunger} />
              <Stat class="fatigue" stat="Усталость" value={fatigue} />
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
          <Input />
        </div>
      </div>
    );
  }
}

export default App;
