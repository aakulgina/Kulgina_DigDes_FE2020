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
            image='https://sun9-5.userapi.com/c857632/v857632959/22c98c/Uy-ge36YK58.jpg'
            imageStyle={{height: 220, marginBottom: 15}}
            description={
              <span className='text'>You have no open chats. :(</span>
            }
          />
        </Route>
        
        {chats.map((chat, index) => {
          
          return (
            <Route key={index} path={`/${chat.id}`}>
              <ChatHeader chat={chat}/>
              <ChatBody />
              <ChatInput chat={chat.id} />
            </Route>
          )
          
        })}
      
      </Switch>

    </Col>
  )
})

export default Chat