import React, { Component } from "react";
import ReactRoundedImage from "react-rounded-image";
import profile from '../img/header/profile.png';


export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          
        <video id="videoBG" autoPlay playsInline muted>
                <source src="Reel.m4v" type="video/mp4"></source>
              </video>
    
          <div className="overlay">
            <div className="container">

            <div className="row">

                <div className="col-md-8 col-md-offset-2 intro-text">

                  <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                   
                    <div className="profileContainer">
                    <div className="main">

                      <div className="profileFrame">
                    <ReactRoundedImage image={profile} roundedSize="0"/>
                    </div>

  <div className="circle"></div>
</div>

<div className="second">
<div className="circle-outer"></div>

</div>

                    </div>

                    
                    </div>

                    <p></p>
                  <h1>
                    {this.props.data ? this.props.data.title : "Loading"}
                    <span></span>
                  </h1>
                  <p>
                    {this.props.data ? this.props.data.paragraph : "Loading"}
                  </p>
                  <a
                    href="https://youtu.be/3BK7Uxo67X4"
                    className="btn btn-custom btn-lg btn-header page-scroll btn-animated"
                    target="_blank"
                  >
                    Watch Demo Reel
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
