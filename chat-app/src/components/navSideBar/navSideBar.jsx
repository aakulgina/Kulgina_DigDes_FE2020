import React from 'react'
import CustomScroll from 'react-custom-scroll'
import { Col, Button, Menu, Dropdown, Tooltip } from 'antd'
import { ThreadsIcon } from '../icons'
import { DownOutlined, SettingOutlined, PlusCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'

import { observer } from 'mobx-react'
import state from '../../mobx-store'

const NavSideBar = observer(() => {

  const { addChat,
          chats,
          countChats,
          deleteChat,
          currentChat,
          openChat } = state

  const nomadList = (
      <Menu>
        <Menu.Item>1st List</Menu.Item>
        <Menu.Item>2nd List</Menu.Item>
        <Menu.Item>3rd List</Menu.Item>
        <Menu.Item>4th List</Menu.Item>
      </Menu>
    )

  return (

      <Col className='nav-bar' span={5}>
        
        <div className='header'>
          <Dropdown overlay={nomadList}>
            <Button>
              Nomad List<DownOutlined />
            </Button>
          </Dropdown>
          <SettingOutlined className='settingIcon' />
        </div>

        <div className='threads'>
          <div className='threads-all'>
            <ThreadsIcon />
            <span className='text'>All threads</span>
          </div>
          <Tooltip title='Create chat'>
            <PlusCircleOutlined className='newChatIcon'
              onClick={() => {
                let newChatName = prompt('Введите название нового чата', '')
                addChat(newChatName) }}/>
          </Tooltip>
        </div>

        <div className='channels'>
          <div className='channels-header'>
            <span>CHANNELS</span>
            <span>{countChats}</span>
          </div>
          <CustomScroll flex='1 1 auto'>
            <div className='channels-list'>
              {Object.keys(chats).map((element, index) => {
                let klass = ''
                if (chats[element].opened) {
                  klass = ' open'
                }
                return(
                  <div key={index} className={`item${klass}`}>
                    <NavLink to={`/${element}`} onClick={() => {openChat(element)}}>
                      #{element}
                    </NavLink>
                    <Tooltip title='Delete chat'>
                      {element !== 'Help_Desk'
                        ? (
                          chats[element].opened === true || (currentChat === 'Help_Desk' && chats['Help_Desk'].opened === false)
                            ? (
                              <NavLink to='/'>
                                <CloseCircleOutlined className='icon text' onClick={() => {deleteChat(element)}} />
                              </NavLink>
                            )
                            : (
                              <NavLink to={`${currentChat}`}>
                                <CloseCircleOutlined className='icon text' onClick={() => {deleteChat(element, currentChat)}} />
                              </NavLink>
                            )
                        )
                        : (<span className='text' style={{display: 'none'}}>Delete</span>)
                      }
                    </Tooltip>
                  </div>
                )
              })}
            </div>
          </CustomScroll>
        </div>
        
        <div className='friends'>
          <div className='header'>
            <span>FRIENDS</span>
            <span>82</span>
          </div>
          <CustomScroll flex='1 1 auto'>
            <div className='friends-list'>
              {['Orlando Diggs', 'Carmen Velasco'].map ((element, index) => {
                return(
                  <div className='wrapper' key={index}>
                    <div className='online'></div>
                    <div className='user-photo'></div>
                    <div className='text'>{element}</div>
                  </div>
                )
              })}
              {['Marie Jensen', 'Alex Lee', 'Leo Gill', 'Britney Cooper'].map ((element, index) => {
                return(
                  <div className='wrapper' key={index}>
                    <div className='offline'></div>
                    <div className='user-photo'></div>
                    <div className='text'>{element}</div>
                  </div>
                )
              })}
            </div>
          </CustomScroll>
        </div>

      </Col>
  )
})

export default NavSideBar