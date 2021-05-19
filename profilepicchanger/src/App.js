import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import 'antd/dist/antd.css'
import { Avatar } from 'antd';
import ProfilePicChanger from "./components/ProfilePicChanger"

class App extends Component {
  render(){
  return (
    <div className="App">
      <h3>Hello</h3>
      <Avatar size={64} icon="user" />
      <ProfilePicChanger />
    </div>
  );
  }
}

export default App;
