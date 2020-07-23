import React from 'react'
import Chat from './components/chat'
import ProfileSideBar from './components/profileSideBar'
import NavSideBar from './components/navSideBar'

class App extends React.Component {

  render () {
    
    return (
      <div className='chattingApp'>
        <NavSideBar />
        <Chat />
        <ProfileSideBar />
      </div>
    )
  }
}

export default App;
