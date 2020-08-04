import React from 'react'
import 'antd/dist/antd.css'
import { Modal, Avatar } from 'antd'
import UserProfile from '../../../userProfile'

class ProfileModal extends React.Component {
  state = {
    loading: false,
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible } = this.state;
    return (
      <React.Fragment>
        <div className='wrapper' onClick={this.showModal}>
          <div className={this.props.klass}></div>
          <Avatar className='user-photo' shape='square' size={35} src={require(`../../../../images/${this.props.user.pic}`)} />
          <span className='text'>
            {this.props.user.name}
          </span>
        </div>
        <Modal
          visible={visible}
          title="User Info"
          onCancel={this.handleCancel}
          footer={null}
          bodyStyle={{padding: '0px'}}
          style={{top: '10px'}}
        >
          <UserProfile user={this.props.user} />
        </Modal>
      </React.Fragment>
    )
  }
}

export default ProfileModal