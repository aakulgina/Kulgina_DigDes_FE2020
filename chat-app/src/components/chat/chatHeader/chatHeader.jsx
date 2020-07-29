import React from 'react'
import { Col, Input, Tooltip, Modal } from 'antd'
import { NavLink } from 'react-router-dom'
import { SearchOutlined, StarOutlined, BellOutlined, MoreOutlined,
    UserOutlined, CloseSquareOutlined, ExclamationCircleOutlined } from '@ant-design/icons'

import { observer } from 'mobx-react'
import state from '../../../mobx-store'

const ChatHeader = observer((props) => {

    const { search,
        changeSearch,
        closeChat,
        selectedMessages,
        unselectAll,
        deleteSelectedMessages } = state

    const { confirm } = Modal

    return (

        <div className='chat-header'>
            <div className='wrapper'>
                <Tooltip title='Close'>
                    <NavLink to='/'>
                    <CloseSquareOutlined className='icon' onClick={() => {closeChat(props.chat)}} />
                    </NavLink>
                </Tooltip>
                <span className='chat-name'>#{props.chat}</span>
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

    )
})

export default ChatHeader