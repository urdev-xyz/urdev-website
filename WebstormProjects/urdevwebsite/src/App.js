import React, { Component } from 'react';
import './App.css';
import video from "./work.mov";




class App extends Component {
    constructor(props,){
        super(props);
        this.state = {
            contentTitle: 'Development Made Simple.',
            contentParagraph: 'The first six weeks take place entirely online, M-F 9-5 Pacific Time, using our award-winning remote delivery format. The sixth week is asynchronous. Then the program feeds into the software engineering immersive at any of our locations',
            fadeIn: 'fade-in'
        }

    }

    updateToHome = () => {
        this.setState({
            contentTitle: 'Development Made Simple.',
            contentParagraph: '--'
        })
    }
    updateToAbout = () => {
        this.setState({
            contentTitle: 'About Us',
            contentParagraph: '--',
        })
    }
    updateToContact = () => {
        this.setState({
            contentTitle: 'Contact Us',
            contentParagraph: '--',
        })
    }


    componentDidUpdate() {
        this.setState();
    }

  render() {
    return (
        <div className="app">
                <video autoPlay muted loop >
                    <source src={video} type="video/mp4"/>
                </video>
            <Navbar homeChange={this.updateToHome.bind(this)} aboutChange={this.updateToAbout.bind(this)} contactChange={this.updateToContact.bind(this)}>

            </Navbar>
            <div className="content">
                <div className={'content-component ' + this.state.fadeIn}>
                    <h1>{this.state.contentTitle}</h1>
                    <p>{this.state.contentParagraph}</p>
                    <button>Give us a call.</button>
                </div>

            </div>
            <Footer>

            </Footer>
        </div>
    );
  }
}

class Navbar extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="navbar">
                <a href='/' id="logo">urdev.xyz</a>
                <div className="links">
                    <button className='icon-link'>

                        <svg className='icon' xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24" enable-background="new 0 0 24 24" width="512px" height="512px">
                            <g>
                                <path d="M24,3c0-0.6-0.4-1-1-1H1C0.4,2,0,2.4,0,3v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V3z" fill="#69f0ae"/>
                                <path d="M24,11c0-0.6-0.4-1-1-1H1c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V11z" fill="#69f0ae"/>
                                <path d="M24,19c0-0.6-0.4-1-1-1H1c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V19z" fill="#69f0ae"/>
                            </g>
                        </svg>


                    </button>
                    <button className='link' onClick={this.props.contactChange}>CONTACT</button>
                    <button className='link' onClick={this.props.aboutChange}>ABOUT</button>
                    <button className='link' onClick={this.props.homeChange}>HOME</button>


                </div>
            </div>
        );
    }
}

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.contentTitle,
            paragragh: this.props.contentParagragh
        }
    }

    componentWillReceiveProps({contentTitle}) {
        this.setState({title: this.props.contentTitle})
    }

    render() {
        return (
            <div className="content">
                <div className="content-component fade-in">
                    <h1>{this.state.title}</h1>
                    <p>{this.state.paragragh}</p>
                    <button>Give us a call.</button>
                </div>

            </div>
        );
    }
}
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <span>copyright 2018</span>
            </div>
        );
    }
}
export default App;
