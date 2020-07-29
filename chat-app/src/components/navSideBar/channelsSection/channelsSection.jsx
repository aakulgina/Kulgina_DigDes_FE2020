import React from 'react'
import CustomScroll from 'react-custom-scroll'
import { Tooltip } from 'antd'
import { ThreadsIcon } from '../../icons'
import { PlusCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'

import { observer } from 'mobx-react'
import state from '../../../mobx-store'

const ChannelsSection = observer(() => {

  const { addChat,
          chats,
          countChats,
          deleteChat,
          currentChat,
          openChat } = state

  return (

    <React.Fragment>

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

    </React.Fragment>

  )
})

export default ChannelsSection