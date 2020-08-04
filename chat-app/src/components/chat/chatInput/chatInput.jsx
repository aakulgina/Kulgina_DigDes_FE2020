import React from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { SmileOutlined, AudioOutlined, PaperClipOutlined } from '@ant-design/icons'

import { observer } from 'mobx-react'
import state from '../../../mobx-store'

const ezLocalTime = require('ez-local-time')

const ChatInput = observer((props) => {

    const { addMessage } = state

    return (
        
        <div className='chat-input'>
            <PaperClipOutlined className='icon' rotate={135}/>
            <AudioOutlined className='icon' />
            <TextareaAutosize className='text-input' defaultValue=''
                placeholder={`Message in #${props.chat}`} maxRows='7'
                onKeyUp={({ target, keyCode, shiftKey }) => {
                    if (!shiftKey && keyCode === 13) {
                    if (target.value.replace(/\n/g, '').replace(/\s/g, '') !== '') {
                        let time = ezLocalTime()
                        addMessage({author: 'QQQ', text: target.value.slice(0, -1),
                            time: `${time.date} at ${time.time}`, selected: false}, props.chat)
                        target.value=''
                    }
                    }
                }}
            />
            <SmileOutlined className='icon' />
        </div>

    )
})

export default ChatInput