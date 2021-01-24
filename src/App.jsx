import React, { Component } from 'react'
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

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <div id="fixedHeader">
        <Header data={this.state.landingPageData.Header} />
        </div>
        <div className="mainContent">
          {/* <Services data={this.state.landingPageData.Services} /> */}
          <About data={this.state.landingPageData.About} />
          <Features data={this.state.landingPageData.Features} />
          <Gallery data={this.state.landingPageData.Works} />
          {/* <Testimonials data={this.state.landingPageData.Testimonials} /> */}
           <Team data={this.state.landingPageData.Team} /> 
          <Contact data={this.state.landingPageData.Contact} />
        </div>
      </div>
    )
  }
}

export default App;
