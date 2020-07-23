import React from 'react'
import CustomScroll from 'react-custom-scroll'
import { Col, Button, Menu, Dropdown } from 'antd'
import { ThreadsIcon } from '../icons'
import { DownOutlined, SettingOutlined } from '@ant-design/icons'

function NavSideBar() {

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
          </div>
          <div className='channels'>
            <div className='channels-header'>
              <span>CHANNELS</span>
              <span>11</span>
            </div>
            <CustomScroll flex='1 1 auto'>
              <div className='channels-list text'>
                {['general', 'support', 'marketing', 'thailand', 'bali', 'poland',
                  'australia', 'jobs', 'startups', 'italy', 'freelance'].map((element, index) => {
                  return(
                    <div key={index}>#{element}</div>
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
}

export default NavSideBar