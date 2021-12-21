import React, { Component } from 'react'
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const timelineTag = {

  background: 'linear-gradient(to right, #1fc9a9ef 0%, #5298e2f3 100%)',
  color: '#fff'

};

const items =
  <Timeline lineColor={'#ddd'}>
     <TimelineItem
      key="001"
      dateText="Jan 2021 – Present"
      dateInnerStyle={timelineTag}
    >
      <h4>Finifugu Games ( Mobile Game and GameFi )</h4>
      <h5>Finifugu Games Ltd., Senior Unity Developer</h5>
      <h6>
        Worked on shipped titles with more than 500k+ downloads on Play Store,
        <a href="https://play.google.com/store/apps/details?id=com.FinifuguGames.google.OtterOcean"> Otter Ocean</a> and 
        <a href="https://play.google.com/store/apps/details?id=com.pixio.google.me.is.king"> Me is King</a>.
        Also work on many mobile games for hyper casual studio.
        Currently working on new GameFi project.
      </h6>
    </TimelineItem>
    <TimelineItem
      key="002"
      dateText="May 2017 - Oct 2019"
      dateInnerStyle={timelineTag}
    >
      <h4>Make-a-bag ( Mobile Application )</h4>
      <h5>Crazy Factory Co. Ltd., Unity Developer</h5>
      <h6>
        3D handbag customization application for retail customer which can be used across mobile or website.
        Worked since Research and Development stage to Development stage with international team.
        Mainly worked on core function of customization and UI system. Also was coordinator between teams and expats colleagues.
  </h6>
    </TimelineItem>
    <TimelineItem
      key="003"
      dateInnerStyle={timelineTag}
      dateText="Aug 2016 - Oct 2016"
    >
      <h4>The Tiguan Virtual Reality Experience ( Mobile VR Visualizer )</h4>
      <h5>innovation.rocks consulting gmbh, Freelance Unity Developer</h5>
      <h6>
        Tiguan pickup truck visualizer on mobile which be able to play VR mode via cardboard.
        Worked on Localization and Translation, also UI and text relate to Localization.
  </h6>
    </TimelineItem>
    <TimelineItem
      key="004"
      dateText="Mar 2016 – June 2016"
      dateInnerStyle={timelineTag}
    >
      <h4>Pixel Holographic Device ( Holographic Game & Application ) </h4>
      <h5>Pixel Visual Sdn. Bhd., Freelance Unity Developer</h5>
      <h6>
        Holographic device which can run cool application and play game on it.
        Made game and application for holographic device which is controlled by using mobile phone or speech recognition.
  </h6>
    </TimelineItem>
    <TimelineItem
      key="005"
      dateText="May 2015 – Aug 2015"
      dateInnerStyle={timelineTag}
    >
      <h4>Sky Rider ( Mobile Game + VR )</h4>
      <h5>Kirimaru Co. Ltd., Freelance Unity Developer</h5>
      <h6>
        Fantasy endless-running game on mobile with option of VR mode on cardboard.
        Reworked old codebase and implemented core function of game. Also contributed in designing include Level, Obstacles, Effects, UI or Sound.
        Beside main gameplay on mobile platform, the VR mode was added to this game as well.
  </h6>
    </TimelineItem>
    <TimelineItem
      key="006"
      dateText="June 2014 – Sep 2014"
      dateInnerStyle={timelineTag}
    >
      <h4>Bipor ( Mobile Edutainment )</h4>
      <h5>Ministry of Energy, Thailand, Freelance Unity Developer</h5>
      <h6>
        Game for Education application on mobile in purpose to encourge kids to save the energy in their daily life.
        Contributed from story, dialog or screenplay to UI and Effect elements. Implemented across the whole project as a solo developer.
  </h6>
    </TimelineItem>
    <TimelineItem
      key="007"
      dateText="June 2014 – Sep 2014"
      dateInnerStyle={timelineTag}
    >
      <h4>Chaing Mai: Back to the fure 2 ( Mobile Virtual World )</h4>
      <h5>Tourism Authority of Thailand, Freelance Unity Developer</h5>
      <h6>
        Mobile virtual world of ancient Chiang Mai city around riverside area.
        Implemetedd the whole project as solo developer and contributed in Effects and UI Elecment design. Also had a chance to mentored 3D students for making lowpoly 3D assets for this project.
  </h6>
    </TimelineItem>
  </Timeline>;



export class about extends Component {
  state = {
    open: false
  }
  render() {

    return (

      <div id="about">
        <div className="container">
          <div className="row">
            <div className="about-text">
              <h2>About</h2>
              <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p>

              <div>{items}</div>
              <div style={{ textAlign: 'center' }}>
                <div className="btn btn-custom btn-animated">
                  <FontAwesomeIcon icon={["fas", "file-alt"]} className="icon" /> <span>&ensp;</span><a className="h5" href="./Kris_Paisarn_Resume.pdf" download>Download Resume</a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about
