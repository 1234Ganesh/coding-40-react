// Write your code here
import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="home-con">
    <Header />
    <div className="home-img-con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        className="mobile-home-img"
        alt="home"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        className="desktop-img"
        alt="home"
      />
    </div>
  </div>
)

export default Home
