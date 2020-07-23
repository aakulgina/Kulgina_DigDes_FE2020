import React from 'react'
import CustomScroll from 'react-custom-scroll'
import TextareaAutosize from 'react-textarea-autosize'
import { Col, Input } from 'antd'
import { SearchOutlined, StarOutlined, BellOutlined, MoreOutlined,
    UserOutlined, SmileOutlined, AudioOutlined, PaperClipOutlined } from '@ant-design/icons'

function Chat() {
    return (
        <Col className='chat' flex='auto'>
          <div className='chat-header'>
            <div className='chat-name'>
              <h3>#chat_name</h3>
              <StarOutlined className='icon' />
            </div>
              <Col className='meta' span={10}>
                <div className='chat-members'>
                  <UserOutlined />
                  <span>1</span>
                </div>
                <Input placeholder='Search...' type='text'
                    suffix={<SearchOutlined />} />
                <BellOutlined />
                <MoreOutlined />
              </Col>
          </div>
          <CustomScroll flex='1 1 auto' keepAtBottom={true}>
            <div className='chat-body'>МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕКМЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕКМЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК  МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК  МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК  МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК  МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК  МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК  МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК  МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК  МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК  МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК  МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК  МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК  МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК  МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК  МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК  МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК  МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК  МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК  МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК  МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК  МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК  МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК  МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК  МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК  МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК  МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК  МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ СООБЩЕНЕК МЕСТО ДЛЯ</div>
          </CustomScroll>
          <div className='chat-input'>
            <PaperClipOutlined className='icon' rotate={135}/>
            <AudioOutlined className='icon' />
            <TextareaAutosize className='text-input' placeholder='Message in #chat_name' maxRows='7'/>
            <SmileOutlined className='icon' />
          </div>
        </Col>
    )
}

export default Chat