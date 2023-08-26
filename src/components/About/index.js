// Write your code here
import Header from '../Header'

import './index.css'

const About = () => (
  <div className="about-con">
    <Header />
    <div className="about-img-con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        className="mobile-about-img"
        alt="About"
      />
      <img
        className="desktop-img"
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="About"
      />
    </div>
  </div>
)

export default About
