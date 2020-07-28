import React from 'react'
import CustomScroll from 'react-custom-scroll'
import TextareaAutosize from 'react-textarea-autosize'
import MultilineTextOutput from '../multilineTextOutput'
import { Col, Input, Empty, Tooltip, Popconfirm, Modal } from 'antd'
import { Switch, Route, NavLink } from 'react-router-dom'
import { SearchOutlined, StarOutlined, BellOutlined, MoreOutlined,
    UserOutlined, SmileOutlined, AudioOutlined, PaperClipOutlined,
    CloseSquareOutlined, ExclamationCircleOutlined } from '@ant-design/icons'

import { observer } from 'mobx-react'
import state from '../../mobx-store'

const Chat = observer(() => {

  const { addMessage,
          filteredMessages,
          search,
          changeSearch,
          chats,
          closeChat,
          setSelected,
          currentChat,
          selectedMessages,
          unselectAll,
          deleteSelectedMessages } = state

  const { confirm } = Modal
  
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

              <div className='chat-header'>
                <div className='wrapper'>
                  <Tooltip title='Close'>
                    <NavLink to='/'>
                      <CloseSquareOutlined className='icon' onClick={() => {closeChat(chat)}} />
                    </NavLink>
                  </Tooltip>
                  <span className='chat-name'>#{chat}</span>
                  <StarOutlined className='icon' />
                </div>
                <span onClick={() => {
                    confirm({ title: 'Are you sure delete these messages?',
                              icon: <ExclamationCircleOutlined />,
                              onOk() { deleteSelectedMessages() }})
                  }}>
                  Удалить выбранное
                </span>
                <span onClick={() => {unselectAll()}}>Снять выделение</span>
                <span>Выделено: {selectedMessages}</span>
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
                    let klass = ''
                    if (chats[currentChat].messages[index].selected) {
                      klass = ' selected'
                    }
                    return(
                      <div key={index} className={`message${klass}`} onClick={() => setSelected(index)}>
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
                  placeholder={`Message in #${chat}`} maxRows='7'
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
                          addMessage(chat, {author: 'QQQ', text: target.value.slice(0, -1),
                              time: time, selected: false})
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
      
      </Switch>

    </Col>
  )
})

export default Chat