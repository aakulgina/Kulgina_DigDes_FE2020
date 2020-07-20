import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import Button from './components/controls/'
import History from './components/history'
import Stat from './components/stats/'
import Input from './components/input/'
import { config } from './components/config'
import valueConfig from './components/valueConfig'
import { buttonsDisabled, buttonsEnabled, statsOngoing } from './components/mapConfig'

class App extends React.Component {

  state = {
    health: 50,
    thirst: 50,
    hunger: 50,
    fatigue: 50,
    dead: false,
    out: ''
  }

  history = ['Тамагочи родился! Самое время что-нибудь сделать!']

  handleInput = (commands) => {
    if (commands !== '') {
      this.setState({out: ''})
      commands = commands.toLowerCase().split(', ')
        for (let k = 0; k < commands.length; k++) {
          var {values, log} = valueConfig(commands[k], this.state)
          var {type, changes} = config(commands[k], values)
          this.updateStates(type, values, changes, log)
      }
    }
  }

  handleClick = (klass, values, log, out) => {
    var {type, changes} = config(klass, values)
    this.updateStates(type, values, changes, log)
    this.setState({out: out})
  }
  
  updateStates = (type, value, change, log) => {
    for (let i = 0; i < type.length; i++) {
      if (value[i] - change[i] <= 0) {
        this.setState({ [type[i]]: 0 })
        type[i] === 'health' && this.setState({ dead: true })
      } else if (value[i] - change[i] >= 100) {
        this.setState({ [type[i]]: 100 })
        switch(type[i]) {
          case 'thirst':
          case 'hunger':
          case 'fatigue':
            this.setState({ dead: true })
            break
          default: ;
        }
      } else {
        this.setState({ [type[i]]: value[i] - change[i] })
      }
    }
    this.history.push(log)
  }

  render () {

    const { hunger, health, fatigue, thirst, out } = this.state

    this.history[this.history.length-1] += `_Здоровье: ${health} Жажда: ${thirst}
                                            Голод: ${hunger} Усталость: ${fatigue}`
    
    this.state.dead && this.history.push('Тамагочи умер и очень разочарован.')

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
            {this.state.dead
              ? (
                <div className='game-field'>
                  <div className='wrapper'>
                    <div className='stats stats-final'>
                      <span className='game-over'>Тамагочи отбыл в Вальгаллу.</span>
                      <a className='game-reload' href='/'>Нажмите, чтобы воскресить питомца.</a>
                    </div>
                    <div className='controls'>
                      {buttonsDisabled.map((element, index) => {
                        return (
                          <Button key={index} class={element.name} active='false'>{element.child}
                          </Button>
                        )
                      })}
                    </div>
                  </div>
                  <Input active='false' />
                </div>
              )
              : (
                <div className='game-field'>
                  {out !== '' && <span className='action'>{out}</span>}
                  <div className='wrapper'>
                    <div className='stats stats-ongoing'>
                      {statsOngoing.map((element, index) => {
                        return(
                          <Stat key={index} class={element.name} value={this.state[element.name]}
                          >{element.child}</Stat>
                        )
                      })}
                    </div>
                    <div className='controls'>
                      {buttonsEnabled.map((element, index) => {
                        return(
                          <Button key={index} class={element.name} active='true'
                            {...valueConfig(element.command, this.state)} onClick={this.handleClick}
                          >{element.child}</Button>
                        )
                      })}
                    </div>
                  </div>
                  <Input active='true' onEnter={this.handleInput} />
                </div>
              )
            }
          </Route>
        
        </Switch>
      </div>
    )
  }
}

export default App
