import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import Button from './components/controls/'
import History from './components/history'
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
    dead: false
  }

  history = ['Тамагочи родился! Самое время что-нибудь сделать!']

  handleInput = (commands) => {
    if (commands !== '') {
      commands = commands.toLowerCase().replace(',', '').split(' ')
        for (let k = 0; k < commands.length; k++) {
          var {values, log} = valueConfig(commands[k], this.state)
          var {type, changes} = config(commands[k], values)
          this.updateStates(type, values, changes, log)
      }
    }
  }

  handleClick = (klass, values, log) => {
    var {type, changes} = config(klass, values)
    this.updateStates(type, values, changes, log)
  }
  
  updateStates = (type, value, change, log) => {
    for (let i = 0; i < type.length; i++) {
      if (value[i] - change[i] <= 0) {
        this.setState({ [type[i]]: 0 })
        if (type[i] === 'health') {
          this.setState({ dead: true })}
      } else if (value[i] - change[i] >= 100) {
        this.setState({ [type[i]]: 100 })
        switch(type[i]) {
          case 'thirst':
          case 'hunger':
          case 'fatigue':
            this.setState({ dead: true })
            break
          default:
            ;
        }
      } else {
        this.setState({ [type[i]]: value[i] - change[i] })
      }
    }
    this.history.push(log)
  }

  render () {

    const { hunger, health, fatigue, thirst } = this.state

    if (this.state.dead === true) {
      this.history.push('Тамагочи умер и очень разочарован.')
    }

    this.history[this.history.length-1] += `_Здоровье: ${health} Жажда: ${thirst}
                    Голод: ${hunger} Усталость: ${fatigue}`

    return (
      <div className='game'>
        <span className='game-title'>
          MiniGame
        </span>

        <Switch>
          
          <Route path='/history'>
            <div className='nav'><NavLink to='/' exact>Вернуться в настоящее</NavLink></div>
            <div className='game-field'>
              <div className='history'>
                {this.history.map((log, i) => {
                return (
                  <History key={i} id={i} log={log} />
                )
                })}
              </div>
            </div>
          </Route>
          
          <Route path='/' exact>
            <div className='nav'><NavLink to='/history'>Заглянуть в прошлое</NavLink></div>
            <div className='game-field'>
              <div className='wrapper'>
                <div className='stats'>
                  {this.state.dead ? (
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
                {this.state.dead === false ? (
                  <div className='controls'>
                    <Button class='eat' active='true'
                            {...valueConfig('есть', this.state)}
                            onClick={this.handleClick}
                    >ЕСТЬ</Button>
                    <Button class='drink' active='true'
                            {...valueConfig('пить', this.state)}
                            onClick={this.handleClick}
                    >ПИТЬ</Button>
                    <Button class='sport' active='true'
                            {...valueConfig('упражняться', this.state)}
                            onClick={this.handleClick}
                    >ЗАНЯТЬСЯ СПОРТОМ</Button>
                    <Button class='work' active='true'
                            {...valueConfig('работать', this.state)}
                            onClick={this.handleClick}
                    >РАБОТАТЬ</Button>
                  </div>
                ) : (
                  <div className='controls'>
                    <Button class='eat' active='false'>ЕСТЬ</Button>
                    <Button class='drink' active='false'>ПИТЬ</Button>
                    <Button class='sport' active='false'>ЗАНЯТЬСЯ СПОРТОМ</Button>
                    <Button class='work' active='false'>РАБОТАТЬ</Button>
                  </div>
                )}
              </div>
              {this.state.dead === false ? (
                <Input active='true' onEnter={this.handleInput} />
              ) : (
                <Input active='false' />
              )}
            </div>
          </Route>
        
        </Switch>
      </div>
    )
  }
}

export default App
