import React from 'react'
import Chat from './components/chat'
import NavSideBar from './components/navSideBar'

class App extends React.Component {

  render () {
    
    return (
      <div className='chattingApp'>
        <NavSideBar />
        <Chat />
      </div>
    )
  }
}

export default App;
