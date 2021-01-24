import React, { Component, useState } from "react";
import { useModal, ModalProvider } from "use-modal-hook";
import Modal from "react-modal";
import ReactPlayer from "react-player";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


Modal.setAppElement("#root");


export class Gallery extends Component {
  state = {
    isOpen: false,
    categoryIndex: 0,
    itemIndex: 0,
  };


  handleShowDialog = (catIndex, iIndex) => {
    this.setState({
      isOpen: !this.state.isOpen,
      categoryIndex: catIndex,
      itemIndex: iIndex,
    });

  };

  render() {
    const worksData = this.props.data;

    return (

      <div id="portfolio" className="text-center">

        <div className="section-title">
          <h2>Portfolio</h2>
        </div>
        <div className="container">
          <div>
            <div className="portfolio-items">
              {worksData
                ? worksData.map((d, i) => (

                  <div className="row">

                    <div className="work-title">
                      <h2>{d.title}</h2>
                    </div>


                    {d.contents.map((subItem, index) => (

                      <div className="col-sm-6 col-md-4 col-lg-4">
                        <div className="portfolio-item">
                          <div className="hover-bg">
                            {" "}
                            <a
                              href="javascript:void(0);"
                              onClick={this.handleShowDialog.bind(this, i, index)}
                            >
                              <div className="hover-text">
                                <h4>{subItem.title}</h4>
                                {subItem.category ?
                                  <h5>{subItem.category}</h5>
                                  : ""
                                }
                              </div>

                              {
                                subItem.thumb ?
                                  <img
                                    src={subItem.thumb}
                                    className="img-responsive"
                                    alt="Project Title"
                                  />
                                  : <div className="portfolio-item-placeHolder"></div>}
                              {""}
                            </a> {" "}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )) : "Loading..."}

            </div>
          </div>
        </div>

        {this.state.isOpen && (
          <Modal
            isOpen={this.state.isOpen}
            onRequestClose={this.handleShowDialog.bind(this, this.state.categoryIndex, this.state.itemIndex)}
            contentLabel="My dialog"
            className="mymodal"
            overlayClassName="myoverlay"
            closeTimeoutMS={500}
          >
            <div>
              {
                <div >
                  <div className="player">
                    <div className='carousel-container'>
                      <Carousel autoPlay showThumbs={false} infiniteLoop={true} autoPlay={false} dynamicHeight={true}>
                        {worksData[this.state.categoryIndex].contents[this.state.itemIndex].playerContents.map((record) =>
                        (
                          record.startsWith("https://youtu") ?
                            <div >
                              <ReactPlayer
                                url={record}
                                width="auto" height="480px" />
                            </div>
                            :
                            <div className="contentBox"  >
                              <img alt="" src={record} className="content" />


                            </div>

                        ))}


                      </Carousel>
                    </div>


                  </div>
                  <div className="textBox">

                    < h3 > {worksData[this.state.categoryIndex].contents[this.state.itemIndex].title}</h3>
                    < h5 > {worksData[this.state.categoryIndex].contents[this.state.itemIndex].category}</h5>

                    {worksData[this.state.categoryIndex].contents[this.state.itemIndex].demoLink != null &&

                      < a href={worksData[this.state.categoryIndex].contents[this.state.itemIndex].demoLink} className="link" target="_blank">

                        <FontAwesomeIcon icon={["fas", "save"]} className="icon" />
                        <span>&ensp;</span>Download Demo </a>

                    }

                    <div className="modalText">

                      {worksData[this.state.categoryIndex].contents[this.state.itemIndex].text}

                    </div>
                    <button className="closeBtn" onClick={this.handleShowDialog}>
                      <FontAwesomeIcon icon={["fas", "times"]} className="icon" />
                      <span> </span>Close</button>
                  </div>
                </div>

              }

            </div>

          </Modal>
        )}
      </div>
    );
  }
}

export default Gallery;
