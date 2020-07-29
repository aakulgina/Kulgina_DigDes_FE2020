import React from 'react'
import { Col, Empty } from 'antd'
import { Switch, Route } from 'react-router-dom'

import { observer } from 'mobx-react'
import state from '../../mobx-store'

import ChatHeader from './chatHeader'
import ChatBody from './chatBody'
import ChatInput from './chatInput'

const Chat = observer(() => {

  const { chats } = state
  
  return (
    <Col className='chat' flex='auto'>
      
      <Switch>

      <Route path='/' exact>
          <Empty className='empty'
            image='https://publicdomainvectors.org/photos/Sleeping-Kitty.png'
            imageStyle={{height: 220, marginBottom: 15}}
            description={
              <span className='text'>У вас ни одного открытого чата. :(</span>
            }
          />
        </Route>
        
        {Object.keys(chats).map((chat, index) => {
          
          return (
            <Route key={index} path={`/${chat}`}>
              <ChatHeader chat={chat}/>
              <ChatBody />
              <ChatInput chat={chat} />
            </Route>
          )
          
        })}
      
      </Switch>

    </Col>
  )
})

export default Chat