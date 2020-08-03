import React from 'react'
import CustomScroll from 'react-custom-scroll'
import ProfileModal from './profileModal'

import { observer } from 'mobx-react'
import state from '../../../mobx-store'

const FriendsSection = observer(() => {

    const { countFriends,
            users } = state

    return (

        <div className='friends'>
            <div className='header'>
                <span>FRIENDS</span>
                <span>{countFriends}</span>
            </div>
            <CustomScroll flex='1 1 auto'>
                <div className='friends-list'>

                    {users.map((element, index) => {
                        let klass = ''
                        if (element.online) {
                            klass = 'online'
                        } else {
                            klass = 'offline'
                        }
                        return(
                            <div className='wrapper' key={index}>
                                <div className={klass}></div>
                                <div className='user-photo'></div>
                                <ProfileModal user={element.name} id={element.id} />
                            </div>
                        )
                    })}

                </div>
            </CustomScroll>
        </div>

    )
    
})

export default FriendsSection