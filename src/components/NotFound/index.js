// Write your code here
import Header from '../Header'

import './index.css'

const NotFound = () => (
  <div className="not-con">
    <Header />
    <div className="content-con">
      <div className="res-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
          className="img"
          alt="not found"
        />
        <h1 className="heading">Lost Your Way?</h1>
        <p className="des">
          Sorry, we cannot find that page.You will find lots to explore on the
          home page
        </p>
      </div>
    </div>
  </div>
)

export default NotFound
