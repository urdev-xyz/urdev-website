import React, { Component } from 'react';
import './App.css';
import video from "./work.mov";
import iphone from "./iphone.png";




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
                <a href='/' id="logo">urdev.xyz</a>
                <div className="links">

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
                    <div className="content-left fade-in">
                        <div>
                        <h1>Development Made Simple.</h1>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur</p>
                            <button>view on github</button>
                        </div>
                    </div>
                    <div className="content-right">
                        <div>
                            <h1>Development Made Simple.</h1>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur</p>
                            <button>find ur dev</button>
                        </div>
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
