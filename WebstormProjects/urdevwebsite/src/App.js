import React, { Component } from 'react';
import './App.css';
import video from "./work.mov";

class App extends Component {
  render() {
    return (
        <div className="app">
                <video autoPlay muted loop id="myVideo">
                    <source src={video} type="video/mp4"/>
                </video>
            <Navbar>

            </Navbar>
            <Content>

            </Content>
            <Footer>

            </Footer>
        </div>
    );
  }
}

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">

            </div>
        );
    }
}

class Content extends Component {
    render() {
        return (
            <div className="content">
            </div>
        );
    }
}
class Footer extends Component {
    render() {
        return (
            <div className="footer">

            </div>
        );
    }
}
export default App;
