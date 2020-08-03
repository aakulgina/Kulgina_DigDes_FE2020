import React from 'react'
import 'antd/dist/antd.css'
import { Modal } from 'antd'
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
        <span className='text' onClick={this.showModal}>
          {this.props.user.name}
        </span>
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