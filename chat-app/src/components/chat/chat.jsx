import React from 'react'
import CustomScroll from 'react-custom-scroll'
import TextareaAutosize from 'react-textarea-autosize'
import MultilineTextOutput from '../multilineTextOutput'
import { Col, Input, Empty } from 'antd'
import { Switch, Route, NavLink } from 'react-router-dom'
import { SearchOutlined, StarOutlined, BellOutlined, MoreOutlined,
    UserOutlined, SmileOutlined, AudioOutlined, PaperClipOutlined,
    CloseSquareOutlined } from '@ant-design/icons'

import { observer } from 'mobx-react'
import state from '../../mobx-store'

const Chat = observer((props) => {

  const { addMessage,
          filteredMessages,
          search,
          changeSearch,
          chats,
          currentChat } = state
  
  return (
    <Col className='chat' flex='auto'>
      
      <Switch>
        
        {Object.keys(chats).map((el, index) => {
          
          return (
            <Route key={index} path={`/${el}`}>

              <div className='chat-header'>
                <div className='wrapper'>
                  <NavLink to='/'>
                    <CloseSquareOutlined className='icon' />
                  </NavLink>
                  <span className='chat-name'>#{currentChat}</span>
                  <StarOutlined className='icon' />
                </div>
                <Col className='meta' span={10}>
                  <div className='chat-members'>
                    <UserOutlined />
                    <span>1</span>
                  </div>
                  <Input value={search} onChange={({target}) => changeSearch(target.value)} placeholder='Search...' type='text'
                      suffix={<SearchOutlined />} />
                  <BellOutlined />
                  <MoreOutlined />
                </Col>
              </div>

              <CustomScroll flex='1 1 auto' keepAtBottom={true}>
                <div className='chat-body'>
                  {filteredMessages.map((element, index) => {
                    return(
                      <div key={index} className='message'>
                        <span className='sender'>{element.author} ({element.time}):</span>
                        <MultilineTextOutput class='text' value={element.text}/>
                      </div>
                    )
                  })}
                </div>
              </CustomScroll>

              <div className='chat-input'>
                <PaperClipOutlined className='icon' rotate={135}/>
                <AudioOutlined className='icon' />
                <TextareaAutosize className='text-input' defaultValue=''
                  placeholder={`Message in #${currentChat}`} maxRows='7'
                  onKeyUp={({ target, keyCode, shiftKey }) => {
                    if (!shiftKey && keyCode === 13) {
                      if (target.value.replace(/\n/g, '') !== '') {
                          let now = new Date()
                          let time = ''
                          if (now.getMinutes() < 10) {
                            time = `${now.getHours()}:0${now.getMinutes()}`
                          } else {
                            time = `${now.getHours()}:${now.getMinutes()}`
                          }
                          addMessage({author: 'QQQ', text: target.value.slice(0, -1),
                              time: time})
                          target.value=''
                      }
                    }
                  }}
                />
                <SmileOutlined className='icon' />
              </div>

            </Route>
          )
        })}

        <Route path='/' exact>
          <Empty className='empty'
            image='https://publicdomainvectors.org/photos/Sleeping-Kitty.png'
            imageStyle={{height: 220, marginBottom: 15}}
            description={
              <span className='text'>У вас ни одного открытого чата. :(</span>
            }
          />
        </Route>
      
      </Switch>

    </Col>
  )
})

export default Chat