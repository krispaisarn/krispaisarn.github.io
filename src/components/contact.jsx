import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div>
        <div id="contact" >
          <div className="container">
              <h2 className="about-text">Contact</h2>
            <div className="row">
                <div className="contact-item">
                  <p>
                      <i className="fa fa-map-marker"></i> Address
                      <br></br>
                    {this.props.data ? this.props.data.address : "loading"}
                  </p>
                </div>
                <div className="contact-item" >
                  <p>
                      <i className="fa fa-phone"></i> Phone
                      <br></br>
                    {this.props.data ? this.props.data.phone : "loading"}
                  </p>
                </div>
                <div className="contact-item">
                  <p>
                      <i className="fa fa-envelope-o"></i> Email
                      <br></br>
                    {this.props.data ? <a href={'mailto:' + this.props.data.email} target="_blank" >{this.props.data.email}</a> : "loading"}
                  </p>
                </div>
                <div className="contact-item">
                  <p>
                      <i className="fa fa-github"></i> GitHub
                <br></br>
                    {this.props.data ? <a href={'https://' + this.props.data.github} target="_blank" >{this.props.data.github}</a> : "loading"}
                  </p>
                </div>
                <div className="contact-item">
                  <p>
                      <i className="fa fa-youtube"></i> Youtube
                <br></br>
                    {this.props.data ? <a href={this.props.data.youtube} target="_blank" >Kris Dev Channel</a> : "loading"}
                  </p>
                </div>
            </div>
          </div>

          <div id="footer">
            <div className="container text-center">
              <p>
                &copy; 2021 Kris Dev. Develop based on original template by {' '}
                <a href="https://github.com/issaafalkattan/React-Landing-Page-Template" rel="nofollow">
                  Issaaf Kattan
              </a>
              </p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Contact;
