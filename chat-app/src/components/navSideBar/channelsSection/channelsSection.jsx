import React from 'react'
import CustomScroll from 'react-custom-scroll'
import { Tooltip, Modal } from 'antd'
import { ThreadsIcon } from '../../icons'
import { PlusCircleOutlined, CloseCircleOutlined, StarFilled, ExclamationCircleOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'

import { observer } from 'mobx-react'
import state from '../../../mobx-store'

const ChannelsSection = observer(() => {

  const { addChat,
          chats,
          countChats,
          deleteChat,
          currentChat,
          openChat,
          starChat,
          sortStarred } = state

  const { confirm } = Modal

  return (

    <React.Fragment>

      <div className='threads'>
        <div className='threads-all'>
          <ThreadsIcon />
          <span className='text'>All threads</span>
        </div>
        <Tooltip title='Create chat'>
          <PlusCircleOutlined className='icon'
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
            {sortStarred.map((element, index) => {
              let klass = ''
              if (element.opened) {
                klass = ' open'
              }
              return(
                <div key={index} className={`item${klass}`}>
                  <NavLink to={`/${element.id}`} onClick={() => {openChat(element.id)}}>
                    #{element.id}
                  </NavLink>
                  <Tooltip title='Delete chat'>
                    {element.id !== 'Help_Desk'
                      ? 
                      (
                        element.opened === true 
                        ? (
                          <CloseCircleOutlined className='icon text' onClick={() => {
                              confirm({ title: 'Are you sure delete this chat?',
                                        icon: <ExclamationCircleOutlined />,
                                        onOk() { window.location.assign('/'); deleteChat(element.id) } })
                            }} />
                        )
                        : (
                          <CloseCircleOutlined className='icon text' onClick={() => {
                              confirm({ title: 'Are you sure delete this chat?',
                                        icon: <ExclamationCircleOutlined />,
                                        onOk() { deleteChat(element.id, currentChat) } })
                            }} />
                        )
                      )
                      : (<span className='text' style={{display: 'none'}}>Delete</span>)
                    }
                  </Tooltip>
                  {element.starred
                        ? (<StarFilled className='icon added' onClick={() => {starChat(element.id)}}/>)
                        : ('')
                      }
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