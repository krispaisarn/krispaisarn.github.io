import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import About from './components/about';
import Services from './components/services';
import Gallery from './components/gallery';
import Testimonials from './components/testimonials';
import Team from './components/Team';
import Contact from './components/contact';
import JsonData from './data/data.json';
import { IconName } from "react-icons/si";
import { XR } from './XR';



export class Main extends Component {
    render() {
        return (
            <Routes>
                <Route path="portfolio/home" element={
                    <div>   <Navigation />
                        <div id="fixedHeader">
                            <Header data={this.props.data.Header} />
                        </div>
                        <div className="mainContent">
                            <About data={this.props.data.About} />
                            <Features data={this.props.data.Features} />
                            <Gallery data={this.props.data.Works} />
                            <Team data={this.props.data.Team} />
                            <Contact data={this.props.data.Contact} />
                        </div>
                    </div>

                } />
                <Route exact path="portfolio/features" element={
                    <div>
                        <XR />
                        <Features data={this.props.data.Features} />
                        <Gallery data={this.props.data.Works} />
                    </div>
                } />
            </Routes>

        );
    }
}


export default Main;