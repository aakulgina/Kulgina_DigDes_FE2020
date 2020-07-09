import React from 'react';
import './App.scss';
import './media.scss';
import Button from './components/controls/Button.jsx'
import Stat from './components/stats/stats.jsx'
import Input from './components/input/input.jsx'
import config from './components/config'
import valueConfig from './components/valueConfig'

class App extends React.Component {

  state = {
    health: 50,
    thirst: 50,
    hunger: 50,
    fatigue: 50
  }

  handleInput = (commands) => {
    if (commands !== '') {
      commands = commands.toLowerCase().replace(',', '').split(' ')
        for (let k = 0; k < commands.length; k++) {
          var {values} = valueConfig(commands[k], this.state)
          var {type, changes} = config(commands[k], values)
          this.updateData(type, values, changes)
      }
    }
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
                      {...valueConfig('есть', this.state)}
                      updateData={this.updateData}
              />
              <Button class="drink" text="ПИТЬ"
                      {...valueConfig('пить', this.state)}
                      updateData={this.updateData}
              />
              <Button class="sport" text="ЗАНЯТЬСЯ СПОРТОМ"
                      {...valueConfig('заняться', this.state)}
                      updateData={this.updateData}
              />
              <Button class="work" text="РАБОТАТЬ"
                      {...valueConfig('работать', this.state)}
                      updateData={this.updateData}
              />
            </div>
          </div>
          <Input handle={this.handleInput} />
        </div>
      </div>
    )
  }
}

export default App;
