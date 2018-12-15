import React, { Component } from 'react';
import './App.css';
import video from "./work.mov";



class App extends Component {
  render() {
    return (
        <div className="app">
                <video autoPlay muted loop >
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
                <a href='#' id="logo">urdev</a>
                <div className="links">
                    <button>ABOUT</button>
                    <button>BLOG</button>
                    <button>CONTACT</button>
                </div>
            </div>
        );
    }
}

class Content extends Component {
    setContentHeight = () => {
        return {minHeight: window.innerHeight,}
    }
    render() {
        return (
            <div className="content">
                <div className="content-box" style={this.setContentHeight()}>
                    <div className="content-left">
                        <h1>Developers As A Service</h1>
                        <h2>Access hundreds of developers from around the world</h2>
                        <button>find ur dev</button>
                    </div>
                    <div className="content-right">
                        <h1>Developers As A Service</h1>
                        <h2>Access hundreds of developers from around the world</h2>
                        <button>find ur dev</button>
                    </div>
                </div>
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
