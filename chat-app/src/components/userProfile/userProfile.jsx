import React from 'react'
import { Col, Button, Menu, Dropdown, Avatar } from 'antd'
import { FBIcon, TwitterIcon, InstaIcon, LinkedInIcon } from '../icons'
import { CaretDownOutlined } from '@ant-design/icons'

const ezLocalTime = require('ez-local-time')

function UserProfile(props) {

    const profileMenu = (
        <Menu>
          <Menu.Item>Delete from Friends</Menu.Item>
          <Menu.Item>Invite to Chat</Menu.Item>
          <Menu.Item>Call</Menu.Item>
          <Menu.Item>Video Call</Menu.Item>
        </Menu>
      )

    const localTime = ezLocalTime(`${props.user.timeZone}`)
    
      var klass = ''

    if (props.user.online) {
      klass = 'online'
    } else {
      klass = 'offline'
    }

    return (
        <Col className='profile-bar'>
          <Avatar shape='square' size={215} src={require(`../../images/${props.user.pic}`)} />
          <div className='user-info'>
            <div className='wrapper'>
              <span className='text user-name'>{props.user.name}</span>
              <div className={klass}></div>
            </div>
            <span className='user-job'>{props.user.job}</span>
          </div>
          <div className='social-media'>
            <a className='icon' href={props.user.fb} target='_blank' rel="noopener noreferrer">
              <FBIcon />
            </a>
            <a className='icon' href={props.user.twitter} target='_blank' rel="noopener noreferrer">
              <TwitterIcon />
            </a>
            <a className='icon' href={props.user.insta} target='_blank' rel="noopener noreferrer">
              <InstaIcon />
            </a>
            <a className='icon' href={props.user.linkedin} target='_blank' rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
          </div>
          <div className='actions'>
            <Button className='writeTo' type='primary'>Message</Button>
            <Dropdown overlay={profileMenu}>
              <Button className='additional' type='primary'>
                <CaretDownOutlined />
              </Button>
            </Dropdown>
          </div>
          <div className='user-info'>
            <div className='text'>
              <span className='label value'>Username: {props.user.id}</span>
            </div>
            <div className='text'>
              <span className='label value'>
                Email: <a href={`mailto:${props.user.email}`}>{props.user.email}</a>
              </span>
            </div>
            <div className='text'>
              <span className='label value'>Skype: {props.user.skype}</span>
            </div>
            <div className='text'>
              <span className='label value'>{localTime.time} Local Time</span>
            </div>
          </div>
        </Col>
    )
}

export default UserProfile