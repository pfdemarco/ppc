import React, { useState, Component } from 'react';
import 'antd/dist/antd.css'
//import React, { useState, Component } from 'react';
import { Modal, Button } from 'antd';

class ProfilePicChanger extends Component {
  constructor(props){
    super(props);
    this.state={ visible: false }
  }
  

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
  return (
    <div className="ProfilePicChanger">
      <Button type="primary" onClick={this.showModal}>
          Modal
        </Button>
        <Modal
          title="Modal"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="Profile Pic Change"
        >
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
        </Modal>
    </div>
  );
  }
}

export default ProfilePicChanger;