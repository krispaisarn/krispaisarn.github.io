import React, { Component } from 'react'

export class XR extends Component {
    render() {
        return (
            <nav id="menu" className="navbar navbar-default navbar-fixed-top">

                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className="navbar-header">
                            <img src="img/icon.svg" className="webIcon"></img>
                            <a className="navbar-brand page-scroll" href="#page-top">
                                Kris Dev
                            </a>




                         
                         


                        </div>
                        <div>
                                <text className="page-title" > Extended Reality</text>
                            </div>
                    </div>
                </div>
            </nav>
        );
    }
}


export default XR;