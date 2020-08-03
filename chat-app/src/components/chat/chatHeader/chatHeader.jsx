import React from 'react'
import { Col, Input, Tooltip, Modal } from 'antd'
import { NavLink } from 'react-router-dom'
import { SearchOutlined, StarOutlined, BellOutlined, MoreOutlined,
    UserOutlined, CloseCircleOutlined, ExclamationCircleOutlined, LeftCircleOutlined,
    DeleteOutlined, CloseOutlined, StarFilled } from '@ant-design/icons'

import { observer } from 'mobx-react'
import state from '../../../mobx-store'

const ChatHeader = observer((props) => {

    const { search,
        changeSearch,
        closeChat,
        selectedMessages,
        unselectAll,
        deleteSelectedMessages,
        cleanSearch,
        starChat,
        chats } = state

    const { confirm } = Modal

    return (

        <div className='chat-header'>
            <div className='wrapper'>
                {selectedMessages === 0
                    ? (
                        <Tooltip title='Close'>
                            <NavLink to='/'>
                                <LeftCircleOutlined className='icon-control' onClick={() => {closeChat(props.chat.id)}} />
                            </NavLink>
                        </Tooltip>
                    )
                    : ( '' )
                }
                <span className='chat-name'>#{props.chat.id}</span>
                {props.chat.starred
                    ? (<StarFilled className='icon added' onClick={() => {starChat(props.chat.id)}} />)
                    : (<StarOutlined className='icon' onClick={() => {starChat(props.chat.id)}} />)
                }
            </div>
            {selectedMessages > 0
                ? (
                    <div className='wrapper'>
                        <span>Selected: {selectedMessages}</span>
                        <Tooltip title='Unselect'>
                            <CloseCircleOutlined className='icon-control' onClick={() => {unselectAll()}} />
                        </Tooltip>
                        <Tooltip title='Delete'>
                            <DeleteOutlined className='icon-control' onClick={() => {
                                if (selectedMessages > 0) {
                                confirm({ title: 'Are you sure delete these messages?',
                                        icon: <ExclamationCircleOutlined />,
                                        onOk() { deleteSelectedMessages() }})
                                }
                            }} />
                        </Tooltip>
                    </div>
                )
                : ( <span style={{display: 'none'}}>Controls</span> )
            }
            <Col className='meta' span={10}>
                <div className='chat-members'>
                    <UserOutlined />
                    <span>1</span>
                </div>
                <Input value={search} onChange={({target}) => changeSearch(target.value)} placeholder='Search...' type='text'
                    suffix={<SearchOutlined />}
                    prefix={
                        search !== ''
                        ? ( <CloseOutlined onClick={() => {cleanSearch()}} /> )
                        : ( '' )
                    } />
                <BellOutlined />
                <MoreOutlined />
            </Col>
        </div>

    )
})

export default ChatHeader