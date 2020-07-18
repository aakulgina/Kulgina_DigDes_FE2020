import React from 'react'
import Button from './components/controls/'
import Stat from './components/stats/'
import Input from './components/input/'
import config from './components/config'
import valueConfig from './components/valueConfig'

class App extends React.Component {

  state = {
    health: 50,
    thirst: 50,
    hunger: 50,
    fatigue: 50,
    lost: false
  }

  handleInput = (commands) => {
    if (commands !== '') {
      commands = commands.toLowerCase().replace(',', '').split(' ')
        for (let k = 0; k < commands.length; k++) {
          var {values} = valueConfig(commands[k], this.state)
          var {type, changes} = config(commands[k], values)
          this.updateStates(type, values, changes)
      }
    }
  }

  handleClick = (klass, values) => {
    var {type, changes} = config(klass, values)
    this.updateStates(type, values, changes)
  }
  
  updateStates = (type, value, change) => {
    for (let i = 0; i < type.length; i++) {
      if (value[i] - change[i] <= 0) {
        this.setState({ [type[i]]: 0 })
        if (type[i] === 'health') {this.setState({ lost: true })}
      } else if (value[i] - change[i] >= 100) {
        this.setState({ [type[i]]: 100 })
        if (type[i] === ('thirst' || 'hunger' || 'fatigue')) {this.setState({ lost: true })}
      } else {
        this.setState({ [type[i]]: value[i] - change[i] })
      }
    }
  }

  render () {

    const { hunger, health, fatigue, thirst } = this.state

    return (
      <div className='game'>
        <span className='game-title'>
          MiniGame
        </span>
        <div className='game-field'>
          <div className='wrapper'>
            <div className='stats'>
              {this.state.lost ? (
                <div className='stats-final'>
                  <span className='game-over'>Тамагочи отбыл в Вальгаллу.</span>
                  <a className='game-reload' href='/'>Нажмите, чтобы воскресить питомца.</a>
                </div>
              ) : (
                <div className='stats-ongoing'>
                  <Stat class='health' stat='Здоровье' value={health} />
                  <Stat class='thirst' stat='Жажда' value={thirst} />
                  <Stat class='hunger' stat='Голод' value={hunger} />
                  <Stat class='fatigue' stat='Усталость' value={fatigue} />
                </div>
              )}
            </div>
            <div className='controls'>
              <Button class='eat' {...valueConfig('есть', this.state)}
                      onClick={this.handleClick}
              >ЕСТЬ</Button>
              <Button class='drink' {...valueConfig('пить', this.state)}
                      onClick={this.handleClick}
              >ПИТЬ</Button>
              <Button class='sport' {...valueConfig('упражняться', this.state)}
                      onClick={this.handleClick}
              >ЗАНЯТЬСЯ СПОРТОМ</Button>
              <Button class='work' {...valueConfig('работать', this.state)}
                      onClick={this.handleClick}
              >РАБОТАТЬ</Button>
            </div>
          </div>
          <Input onEnter={this.handleInput} />
        </div>
      </div>
    )
  }
}

export default App
