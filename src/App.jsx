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
import GalleryData from './data/workData.json';
import { IconName } from "react-icons/si";

export class App extends Component {
  state = {
    landingPageData: {},
    galleryData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }
    getgalleryData() {
    this.setState({galleryData : GalleryData})
  }

  componentDidMount() {
    this.getlandingPageData();
    this.getgalleryData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        {/* <Services data={this.state.landingPageData.Services} /> */}
        <About data={this.state.landingPageData.About} />
        <Features data={this.state.landingPageData.Features} />
        <Gallery data={this.state.landingPageData.Works} />
        {/* <Testimonials data={this.state.landingPageData.Testimonials} /> */}
        {/* <Team data={this.state.landingPageData.Team} /> */}
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    )
  }
}

export default App;
