import React from 'react'
import CustomScroll from 'react-custom-scroll'
import TextareaAutosize from 'react-textarea-autosize'
import MultilineTextOutput from '../multilineTextOutput'
import { Col, Input } from 'antd'
import { SearchOutlined, StarOutlined, BellOutlined, MoreOutlined,
    UserOutlined, SmileOutlined, AudioOutlined, PaperClipOutlined } from '@ant-design/icons'

import { observer } from 'mobx-react'
import state from '../../mobx-store'

const Chat = observer((props) => {

  const { addMessage,
          filteredMessages,
          search,
          changeSearch } = state
  
  return (
      <Col className='chat' flex='auto'>
        <div className='chat-header'>
          <div className='wrapper'>
            <span className='chat-name'>#chat_name</span>
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
          <div className='chat-body' style={{display: 'flex', flexDirection: 'column'}}>
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
            placeholder='Message in #chat_name' maxRows='7'
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
      </Col>
  )
})

export default Chat