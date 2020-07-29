import React from 'react'
import CustomScroll from 'react-custom-scroll'

const FriendsSection = () => {

    return (

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

    )
    
}

export default FriendsSection