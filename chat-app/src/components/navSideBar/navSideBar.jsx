import React from 'react'
import { Col, Button, Menu, Dropdown } from 'antd'
import { DownOutlined, SettingOutlined } from '@ant-design/icons'

import { observer } from 'mobx-react'

import FriendsSection from './friendsSection'
import ChannelsSection from './channelsSection'

const NavSideBar = observer(() => {


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

        <ChannelsSection />
        <FriendsSection />

      </Col>
  )
})

export default NavSideBar