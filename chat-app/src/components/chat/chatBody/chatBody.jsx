import React from 'react'
import CustomScroll from 'react-custom-scroll'
import MultilineTextOutput from '../../multilineTextOutput'
import { CheckCircleOutlined } from '@ant-design/icons'

import { observer } from 'mobx-react'
import state from '../../../mobx-store'

const ChatBody = observer(() => {

    const { filteredMessages,
        setSelected } = state

    return (
        <CustomScroll flex='1 1 auto' keepAtBottom={true}>
            <div className='chat-body'>
                {filteredMessages.map((element, index) => {
                    let klass = ''
                    if (element.selected) {
                    klass = ' selected'
                    }
                    return(
                    <div key={index} className={`message${klass}`} onClick={() => setSelected(index)}>
                        <CheckCircleOutlined className='icon' />
                        <div className='wrapper'>
                            <span className='sender'>{element.author} ({element.time}):</span>
                            <MultilineTextOutput class='text' value={element.text}/>
                        </div>
                    </div>
                    )
                })}
            </div>
        </CustomScroll>
    )
})

export default ChatBody