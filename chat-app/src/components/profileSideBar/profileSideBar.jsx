import React from 'react'
import { Col, Button, Menu, Dropdown } from 'antd'
import { FBIcon, TwitterIcon, InstaIcon, LinkedInIcon } from '../icons'
import { DownOutlined } from '@ant-design/icons'


function ProfileSideBar() {

    const profileMenu = (
        <Menu>
          <Menu.Item>Add to Friends</Menu.Item>
          <Menu.Item>Invite to Chat</Menu.Item>
          <Menu.Item>Call</Menu.Item>
          <Menu.Item>Video Call</Menu.Item>
        </Menu>
      )

    return (
        <Col className='profile-bar'>
          <div className='user-photo'></div>
          <div className='user-info'>
            <div className='wrapper'>
              <span className='user-name'>Amilia Luna</span>
              <div className='online'></div>
            </div>
            <span className='user-job'>UI Designer</span>
          </div>
          <div className='social-media'>
            <FBIcon />
            <TwitterIcon />
            <InstaIcon />
            <LinkedInIcon />
          </div>
          <div className='actions'>
            <Button className='writeTo' type='primary'>Message</Button>
            <Dropdown overlay={profileMenu}>
              <Button className='additional' type='primary'>
                <DownOutlined />
              </Button>
            </Dropdown>
          </div>
          <div className='user-info'>
            <div className='text'>
              <span className='label'>Username</span>
              <span className='value'>@amilia_lu</span>
            </div>
            <div className='text'>
              <span className='label'>Email</span>
              <span className='value'>a-luna@gmail.com</span>
            </div>
            <div className='text'>
              <span className='label'>Skype</span>
              <span className='value'>amiluna</span>
            </div>
            <div className='text'>
              <span className='label'>Timezone</span>
              <span className='value'>2:21 PM Local Time</span>
            </div>
          </div>
        </Col>
    )
}

export default ProfileSideBar