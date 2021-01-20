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
                    {this.props.data ? <a href={'https://github.com/' + this.props.data.github} target="_blank" >{this.props.data.github}</a> : "loading"}
                  </p>
                </div>
            </div>
            {/*
                <form name="sentMessage" id="contactForm" noValidate>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Name"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Email"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Message"
                      required
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <button type="submit" className="btn btn-custom btn-lg">
                    Send Message
                  </button>
                </form>
                */}
          </div>

          <div id="footer">
            <div className="container text-center">
              <p>
                &copy; 2021 Kris Paisarn Dev. Develop based on original template by {' '}
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
